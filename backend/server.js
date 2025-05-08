import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import cors from "cors";
import path from "path" // production
const __dirname = path.resolve(); // production
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


mongoose.set('strictQuery', false);

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", async (req, res, next) => {
    await connectDB().catch(console.error);
    next();
}, authRoutes);

// for the production start
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}else {
    app.get('/', (req, res) => {
        res.send('API is running');
    });
}

//end

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})