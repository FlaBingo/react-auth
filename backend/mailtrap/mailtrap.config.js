import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

export const client = new MailtrapClient({
  // endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "satyamm1402@gmail.com",
  name: "Satyam Prajapati",
};





// const recipients = [
//   {
//     email: "satyamm1402@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);