import mongoose from "mongoose";
const watchedSchema = new mongoose.Schema(
    {
        userId: String,
        showId: String,
        imageName: String,
        showName: String
    },
    {collection: "watched"}
);
export default watchedSchema;