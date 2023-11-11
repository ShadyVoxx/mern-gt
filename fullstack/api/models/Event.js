import mongoose from "mongoose";
const {Schema, model} = mongoose;

const eventSchema = new Schema({
    title:String,
    timing:Date,
    users:[{type:Schema.Types.ObjectId, ref:'User'}]
},{
    timestamps:true
});

const EventModel = model('Event', eventSchema);

export default EventModel;