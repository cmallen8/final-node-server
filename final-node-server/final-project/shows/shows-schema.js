import mongoose from "mongoose";

const showsSchema = new mongoose.Schema({
        showName:  String,
        showID: String,
        poster_path: String,

    },
    {collection: "shows"})
export default showsSchema;