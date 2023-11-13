import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import User from "./models/User.js";
import Event from "./models/Event.js";
import bodyParser from "body-parser";
import 'dotenv/config';

/* EXPRESS SERVER AND MIDDLEWARE */
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            
 } 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))

/* ENVIRONMENT VARIABLES */
const port = process.env.PORT;
const mongoURL = process.env.MONGODB_URL;
const secret = process.env.SECRET;


/* MONGODB CONNECTION */
await mongoose.connect(mongoURL);

/* SALTING & HASHING */
const salt = await bcrypt.genSalt(10);

/* GET REQUESTS */
app.get("/", ()=> {
    console.log("Hello world!!");
});

/* POST REQUESTS */
app.post("/register", async (req,res)=>{
    const {username,password} = req.body;
    console.log(req.body);
    try{
    const userDoc = await User.create({
        username, 
        password: bcrypt.hashSync(password,salt)});
    res.json(userDoc);}
    catch(err){
        console.log(err);
        res.status(400).json;
    }
});

app.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.findOne({username});
        const passOk = await bcrypt.compare(password, userDoc.password);
        if (passOk){
            jwt.sign({username, id:userDoc._id},secret, {}, (err,token)=>{
                if (err) throw err;
                res.cookie('token',token).json({
                    id:userDoc._id,
                    username
                });
            });
            res.json("Success");
        }
        else{
            res.status(400).json("Wrong Credentials");
        }
    }
    catch (e){
        console.log(e);
        res.status(400).json("Wrong Credentials");
    }
})

/* LISTEN METHOD */
app.listen(port,()=>{
    console.log("Listening on Port "+port);
})

