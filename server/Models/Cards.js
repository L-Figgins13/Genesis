import db from'../db.js';
import mongoose from'mongoose';
import shuffle from '../lib/fisher-yates-shuffle.js';

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {type: String},
    ruleText: {type: String},
    suit: {type: String},
    imageURL: {type: String}
})

cardSchema.statics.getShuffledDeck = function getShuffledDeck() {

    const promise = new Promise ((resolve,reject) => {
        this.model('Card').find({})
        .then(deck =>{
            const shuffledDeck = shuffle(deck);
            console.log(deck);
        })
    })
}

let Card = mongoose.model('Card', cardSchema);

export default Card;



