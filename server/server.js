import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import dbconnect from "./dbconfig/dbconnection.js";
import UserRoutes from "./routes/userRoutes.js"


const app=express();
app.use(cors());
dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

dbconnect();

app.get("/",(req,res)=>{
    res.send("Server started")
})

app.use("/api",UserRoutes);
app.listen(5000,()=>{
    console.log('Server started on port 5000')
})