import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser()) // allow us to parse the incoming cookies
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`)
}) 