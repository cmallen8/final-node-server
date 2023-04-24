import mongoose from "mongoose";
const followsSchema = new mongoose.Schema(
    {
        follower: {type: mongoose.Schema.Types.ObjectId, ref: "users-model"},
        followed: {type: mongoose.Schema.Types.ObjectId, ref: "users-model"}
    },
    {collection: "follows"}
)
export default followsSchema;