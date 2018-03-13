import db from '../db.js';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    name: String,
    url: String,
})

const CardSchema = new Schema({
    name: String,
    ruleText: String,
    value: Number,
    suit: String,
    image: ImgSchema
})

const PlayerSchema = new Schema({
    user_id: String,
    username: String,
    health: {type:Number, default: 100},
})

// const Player = mongoose.model('Player', PlayerSchema);

const GameSchema = new Schema({
    owner: String,
    title: String,
    gameCards: [CardSchema],
    players:[PlayerSchema]
});

// G
// ameSchema.methods.createGame = function createGame(user, title) {
//     this.model('Game').create({owner:user.username, title: title, players: players.pus})
// }


var Game = mongoose.model('Game', GameSchema);

module.exports = Game;