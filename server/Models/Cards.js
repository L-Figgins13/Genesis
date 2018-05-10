const db = require('../db.js');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const cardSchema = new Schema({
    name: {type: String},
    ruleText: {type: String},
    suit: {type: String},
    imageURL: {type: String}
})

let Card = mongoose.model('Card', cardSchema)

module.exports = Card;



