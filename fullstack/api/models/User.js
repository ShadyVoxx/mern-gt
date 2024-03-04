import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 4
    },
    password: {
        type: String,
        required: true
    },
    contactNumber: String,
    handle: String,
    currentEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    position: String,
    eventsCovered : Number,
    department: {
        type: String,
        maxLength: 3
    }
    },
    {timestamps: true
});

// Use the directly exported model
export default model('User', userSchema);
