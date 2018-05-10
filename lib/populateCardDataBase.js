#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const cardSchema = new Schema({
    name: {type: String},
    ruleText: {type: String},
    suit: {type: String},
    imageURL: {type: String}
});

const Card = mongoose.model('Card', cardSchema);
 

const deck = [];

const rules = {
    ace: 'ace rule text goes here',
    king: 'king rule text goes here',
    queen: 'queen rule text goes here',
    jack: 'jack rule text goes here',
    ten: 'ten rule text goes here',
    nine: 'nine rule text goes here',
    eight: 'eight rule text goes here',
    seven: 'seven rule text goes here',
    six: 'six rule text goes here',
    five: '5 rule text goes here',
    four: 'four rule text goes here',
    three: 'three rule text goes here',
    two: 'two rule text goes here',
    joker: 'joker rule text goes here'
}

function getRule(value) {
    switch (value) {
        case '2': return rules['two'];
        case '3': return rules['three'];
        case '4': return rules['four'];
        case '5': return rules['five'];
        case '6': return rules['six'];
        case '7': return rules['seven'];
        case '8': return rules['eight'];
        case '9': return rules['nine'];
        case '10': return rules['ten'];
        case 'jack': return rules['jack'];
        case 'queen': return rules['queen'];
        case 'king': return rules['king'];
        case 'ace': return rules['ace'];
        case 'joker': return rules['joker']
        default: console.log('Error in getRule function'); return null;

    }
}

mongoose.connect('mongodb://localhost/genesis')
.then( () => {
    console.log('mongodb connected');
    mongoose.Promse = global.Promise;

    const files = fs.readdirSync("./static/img/PNG-cards-1.3/");
    console.log(files);

    files.forEach( file => {
        let fileName = file.split('.')[0].trim();
        let fileEXT = file.split('.')[1].trim();
        let cardName = fileName.split('_')[0].trim();
        let cardRuleText = getRule(cardName);
        let cardImageUrl = path.join(path.normalize(path.resolve(__dirname, '..'), 'static/img/PNG-cards-1.3/', file));
        let cardSuit;

        if(fileName.split('_')[2]){
            cardSuit = fileName.split('_')[2].trim();
        }

        const newCard = new Card({
            name: cardName,
            ruleText: cardRuleText,
            suit: cardSuit,
            imageURL: cardImageUrl
        });

        newCard.save()
        .then( doc => {
            console.log(doc);
        })
        .catch(err => {
            console.log(err);
        })

        
    })
}).catch(err => {
    console.log('error connecting: ', err);
});

