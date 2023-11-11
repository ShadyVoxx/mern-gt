import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        
        minlength: 4
    },
    password: {
        type: String,
    },
    contactNumber: String,
    handle: String,
    currentEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

// Use the directly exported model
export default model('User', userSchema);
