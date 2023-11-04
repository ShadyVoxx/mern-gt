import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(4000,()=>{
    console.log("Listening on Port 4000");
})

app.get("/", ()=> {
    console.log("Hello world!!");
})
