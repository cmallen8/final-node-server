import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        //unique: true,
        required: true},
    password: {
        type: String,
        required: true},
    userType: {
        type: String,
        default: "INDIVIDUAL",
        enum: ['INDIVIDUAL', 'FAMILY']},
    firstName: String,
    lastName: String,
        isAdmin: { type: Boolean, default: false },

        email: {
        type: String}
},
    {collection: "users"})
export default usersSchema;