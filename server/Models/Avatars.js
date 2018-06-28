import db from '../db.js';
import mongoose from 'mongoose';
import constants from '../constats.js';

const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
      avatarNumber: {type: Number, index: true, required: true, unique: true },
      name: {type: String, required: true },
      imageURL: {type: String}
});

const Avatar = mongoose.model('Game', GameSchema);

export default  Avatar;