import mongoose from "mongoose";
const {Schema, model} = mongoose;

const eventSchema = new Schema({
    title:String,
    date: Date,
    timing:String,
    users:[{type:Schema.Types.ObjectId, ref:'User'}],
    location:String,
    requirements:String
},{
    timestamps:true
});

const EventModel = model('Event', eventSchema);

export default EventModel;