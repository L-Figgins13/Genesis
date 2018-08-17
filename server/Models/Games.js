import db from '../db.js';
import mongoose from 'mongoose';
import Logger from '../logger.js';
import constants from '../constants.js';


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
    avatarID: {type: Number},
    avatarURL: {type: String},
    health: {type:Number, default: 100}
})

const GameSchema = new Schema({
    owner: String,
    title: String,
    hasStarted: {type:Boolean, default: false},
    gameCards: [CardSchema],
    players:[PlayerSchema] 
})

GameSchema.statics.join = function join(gameID, user) {
    //stages player to be added to the game
    const player = {
        user_id: user._id,
        username: user.username,
        avatarID: user.avatarID,
        avatarURL: user.avatarURL
    }
    //TODO fix this fucking mess
    //creates a promise to be returned so that the final .then() will be in the route
    const promise = new Promise ((resolve, reject) => {
        this.model('Game').findById(gameID)
        .then(game => {
            const data = {
                message: '',
                errCode: 0,
                success: false,
                player: {},
            }

            Logger(constants.MAX_PLAYERS, 'MAX_PLAYER CONSTANT');

            if(game.players.length >= constants.MAX_PLAYERS) {
                data.message = 'Game is Full';
                data.errCode = 1;
                reject(data);
            
            } else if (game.hasStarted) {
                data.message = 'Sorry the Game Has Already Started';
                data.errCode = 2;
                reject(data);
                

            } else if (game.players.some(x => x.user_id === player.user_id)) {
                data.message = 'ERROR: Player already exists in game';
                data.errCode = 3;
                reject(data);
                
            } else {
                
                data.message = `Player ${player.username} has succesfully joined the game`;
                data.success = true;
                data.player = player;

                game.players.push(player);
                game.save()
                .then(updatedGame => {
                    resolve(data);
                })        
            }   
        })
    });
   return promise;
}

GameSchema.statics.start = function start(gameID) {
    console.log('game ID:', gameID);

    const promise = new Promise ((resolve, reject) => {
        this.model('Game').findById(gameID)
        .then( game => {

            console.log('before update:', game);
          if(game.hasStarted === false) {
              game.hasStarted = true;
              game.save()
              .then( updatedGame => {
                  console.log('Updated Game:', updatedGame);
                  resolve(updatedGame);
              })
          } else {
              reject('Error: Game has already started');
          }              
        })
        .catch(err => {
            reject(err);
        })
    });
    return promise;
}

var Game = mongoose.model('Game', GameSchema);

export default Game;