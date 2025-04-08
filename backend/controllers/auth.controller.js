import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from "../nodemailers/nodemailer.js";
import crypto from "crypto";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    if (password.length < 8) return res.json({ success: false, message: "password should be greater than or equal to 8" })

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // that's it hahaha

    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);
    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({ success: true, message: "User created", user: { ...user._doc, password: undefined, } });


  } catch (error) {
    console.error("Error in signup controller", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ success: false, message: "invalid Credentials" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "invalid Credentials" })
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date(); // Why not Date.now(); 
    await user.save();

    res.status(201).json({ success: true, message: "User LoggedIn successfully", user: { ...user._doc, password: undefined, } });



  } catch (error) {
    console.error("Error in login controller", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }

};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" })
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() }
    })

    if (!user) return res.status(400).json({ success: false, message: "Invalid or expired verification Code" })

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.name)

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...user._doc,
        password: undefined,
      }
    })
  } catch (error) {
    console.error("Error in verifyEmail controller ", error.message)
    res.status(500).json({ success: false, message: "Server Error" })
  }
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
    }

    //Generate reset token, i don't know how it works
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 60 * 60 * 1000;

    user.resetPasswordToken = resetToken
    user.resetPasswordExpiresAt = resetTokenExpiresAt

    await user.save();

    //send Email
    await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`)

    res.status(200).json({ success: true, message: "Password reset link sent to your email" })
  } catch (error) {
    console.error("Error in forgotPassword controller")
    res.status(500).json({ success: false, message: "Server Error" })
  }
}

export const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({ resetPasswordToken: resetToken, resetPasswordExpiresAt: { $gt: Date.now() } })
    if (!user) return res.status(400).json({ success: false, message: "Invaid or expired reset token" })

    //update password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();
    await sendResetSuccessEmail(user.email)

    res.status(200).json({ success: true, message: "Password reset successful" })
  } catch (error) {
    console.error("Error in resetPassword controller", error)
    res.status(500).json({ success: false, message: "Server Error" })
  }
}


export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password")
    if (!user) return res.status(400).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in checkAuth ", error)
    res.status(400).json({ success: false, message: error.message });
  }
} 