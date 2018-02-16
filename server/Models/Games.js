import db from '../db.js';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    owner: String,
    title: String
});

// gameSchema.statics.createGame = function(cb) {
//     return this.model('Game').
// }

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;