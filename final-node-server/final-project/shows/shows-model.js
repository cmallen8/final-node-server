import mongoose from "mongoose";
import showsSchema from "./shows-schema.js";

const showsModel = mongoose.model("shows-model", showsSchema);
export default showsModel;