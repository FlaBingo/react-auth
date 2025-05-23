import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        unique: true,
    },
    password: {
        type: String,
        required : true,
        minLength: 8,
    },
    lastLogin:{
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)

