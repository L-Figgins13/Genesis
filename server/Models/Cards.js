import mongoose from "mongoose";
import db from "../db.js";
import shuffle from "../lib/fisher-yates-shuffle.js";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String },
  ruleText: { type: String },
  suit: { type: String },
  imageURL: { type: String }
});

// cardSchema.statics.getShuffledDeck = function getShuffledDeck() {

//     const promise = new Promise ((resolve,reject) => {
//         this.model('Card').find({})
//         .then(deck =>{
//             shuffle(deck);
//             console.log(deck);
//             resolve(shuffledDeck);
//         })
//         .catch(err => {
//             console.log(err);
//             reject(err);
//         })
//     })

//     return promise;
// }

let Card = mongoose.model("Card", cardSchema);

export default Card;
