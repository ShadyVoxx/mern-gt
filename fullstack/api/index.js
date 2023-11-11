import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import User from "./models/User.js";
import Event from "./models/Event.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))


await mongoose.connect("mongodb+srv://N_N:oUo9SPltzjKY4hen@cluster0.x1drsyb.mongodb.net/?retryWrites=true&w=majority");

app.listen(4000,()=>{
    console.log("Listening on Port 4000");
})

app.get("/", ()=> {
    console.log("Hello world!!");
});

app.post("/register", async (req,res)=>{
    const {username,password} = req.body;
    console.log(req.body);
    try{
    const userDoc = await User.create({
        username, 
        password});
    res.json(userDoc);}
    catch(err){
        console.log(err);
        res.status(400).json;
    }
});

//mongodb+srv://N_N:oUo9SPltzjKY4hen@cluster0.x1drsyb.mongodb.net/?retryWrites=true&w=majority
