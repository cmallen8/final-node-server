import mongoose from "mongoose";
import watchedSchema from "./watched-schema.js";
const watchedModel = mongoose.model("watched-model", watchedSchema);
export default watchedModel;