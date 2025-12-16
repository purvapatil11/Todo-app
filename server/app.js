import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import userRoute from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import { getAllTodos } from "./controllers/todo.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173/",
    credentials:true
}))

app.use("/api/v1/user",userRoute);
app.use("/api/v1/todo",todoRouter);
app.use("/api/v1/alltodos",getAllTodos);

//http://localhost:8000/api/v1/user/

const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`server is listening on the port ${PORT}`);
})