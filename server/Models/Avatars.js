import db from "../db.js";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  avatarNumber: { type: Number, index: true, required: true, unique: true },
  name: { type: String, required: true },
  imageURL: { type: String }
});

const Avatar = mongoose.model("Avatar", AvatarSchema);

export default Avatar;
