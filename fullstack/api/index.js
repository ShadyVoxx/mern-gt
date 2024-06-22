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
    credentials:true
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

/* LISTEN METHOD */
app.listen(port,()=>{
    console.log("Listening on Port "+port);
});

/* EXTERNAL FUNCTIONS */

//--> TIME CONVERSIONS 
function convertTo24Hour(timeStr){
    let [time,modifier] = timeStr.split(' ');
    let [hours,minutes] = time.split(':');
    if (modifier == "PM"){
        time = String(parseInt(time) + 12)+":"+minutes;
    }
    if (hours.length < 2){
        time = "0"+time;
    }
    return time;
}

function compareTime(timeStr1,timeStr2){
    timeStr1 = convertTo24Hour(timeStr1);
    timeStr2 = convertTo24Hour(timeStr2);
    return timeStr1 >= timeStr2;
}


/* GET REQUESTS */
app.get('/', (req, res) => {
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
                res.status(200).json("Success");
            });
         
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

app.get('/calender', (req, res)=>{
    console.log("hello");
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if (err){
            console.error("JWT verification error:", err);
            return res.status(401).json({error: "Unauthorized"});
        }
        res.json(info);
    })
})

app.get('/profile/:username', async (req, res) => {
    try {
      
        const {username} = req.params;
        const userDoc = await User.findOne({ username });
      

        if (!userDoc) {
            return res.status(404).json({ message: 'User not found' });
        }

        const event = await Event.find({ users: userDoc._id }).exec();

        console.log(event);
        return res.status(200).json({userInfo: userDoc, events: event});
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.error(e);
    }
});

app.post('/userpositions', async (req, res) => {
    try {
        const { users } = req.body;
        const userPositions = [];
        console.log(users);

       for (const _id of users) {
            const userDoc = await User.findById(_id);

            if (!userDoc) {
                return res.status(404).json("User Not Found");
            }

            // Check for the existence of userDoc.position before pushing to userPositions
            if (userDoc.position) {
                userPositions.push(userDoc.position);
            }
       }

        return res.status(200).json({ userPositions });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server Error");
    }
});

app.post("/addevent", async (req, res) => {
    console.log("Add Event Called");
    try{
        const { 
            eventName,
            startTime,
            endTime,
            location,
            date
         } = req.body;
         console.log(req.body);
        if (!startTime || !endTime || !location || !date || compareTime(startTime, endTime)){
            console.log(startTime, endTime);
            console.log("Illegal Format", startTime >= endTime);
            return res.status(400).json("Illegal Format");
        }
        const eventDoc = await Event.create({
            eventName,
            startTime,
            endTime,
            location,
            date
        });
        if (eventDoc){
            return res.status(200).json(eventDoc)
        }
        else{
            return res.status(400).json("Failed to Create");
        }
    }
    catch(e){
        console.log(e);
        return res.status(500).json("Internal Server Error");
    }
});

app.post("/date/eventdetails", async (req, res) => {
    try{
        let {date} = req.body;
        console.log(date);
    
        const eventDocs = await Event.find({ date: new Date(date) });

        return res.status(200).json(eventDocs);
    }
    catch (e){
        console.log(e)
        return res.status(500).json("Internal Server Error")
    }
})