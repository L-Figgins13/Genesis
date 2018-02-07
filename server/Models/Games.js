const db = require('../db.js');

var gameSchema = new Schema({
    _id: Number,
    owner: String,
    title: String
});

var Games = mongoose.model('Games', gameSchema);

module.exports = Games;