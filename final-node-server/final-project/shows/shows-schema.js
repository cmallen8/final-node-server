import mongoose from "mongoose";

const showsSchema = new mongoose.Schema({
        showName:  String,
        showID: String,
        showImage: String,
        showNetworkPaid: String,
        showNetworkFree: String,
    },
    {collection: "shows"})
export default showsSchema;