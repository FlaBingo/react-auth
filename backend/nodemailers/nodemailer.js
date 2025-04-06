import transporter from "./email.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email , verificationToken) =>{
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Verify your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
        })

        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
}
// sendVerificationEmail("satyamm1402@gmail.com", "3342343") 
// // for testing purposes "node backend/nodemailers/nodemailer.js"


export const sendWelcomeEmail = async (email, name) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome User",
            html: WELCOME_EMAIL_TEMPLATE.replace("{email}", email).replace("{name}", name)
        })

        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
}

export const sendPasswordResetEmail = async (email, passwordResetLink) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Password reset Link",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{email}", email).replace("{resetLink}", passwordResetLink)
        })

        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
}


export const sendResetSuccessEmail = async (email) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Password changed successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{email}", email)
        })

        console.log("Email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
}