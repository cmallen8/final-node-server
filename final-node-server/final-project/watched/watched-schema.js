import mongoose from "mongoose";
const watchedSchema = new mongoose.Schema(
    {
        userId: String,
        showId: String,
        poster_path: String,
        showName: String
    },
    {collection: "watched"}
);
export default watchedSchema;