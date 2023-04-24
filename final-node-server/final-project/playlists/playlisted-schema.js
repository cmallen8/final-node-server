import mongoose from "mongoose";
const playlistedSchema = new mongoose.Schema(
    {
        userId: String,
        showId: String,
    },
    {collection: "playlisted"}
);
export default playlistedSchema;