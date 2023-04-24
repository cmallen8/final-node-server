import mongoose from "mongoose";
import playlistedSchema from "./playlisted-schema.js";

const playlistedModel = mongoose.model("playlisted", playlistedSchema);
export default playlistedModel;