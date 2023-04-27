import mongoose from "mongoose";
const playlistedSchema = new mongoose.Schema(
    {
        userId: String,
        showId: String,
        poster_path: String,
        showName: String,
    },
    {collection: "playlisted"}
);
export default playlistedSchema;