// import { MailtrapClient } from "mailtrap";
import { client, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email", 
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken), 
            category: "Email Verification"
        })


        // console.log("email sent successfully", response)


    } catch (error) {
        console.log("Error sending Verification email", error)
        // throw new Error(error.message);
    }
}


// export const sendWelcomeEmail = async (email, name) => {
    
// }
// export const sendPasswordResetEmail = async (email, name) => {
    
// }
// export const sendResetSuccessEmail = async (email, name) => {
    
// }


