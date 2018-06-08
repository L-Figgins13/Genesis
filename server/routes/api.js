import express from 'express';
import Game from '../Models/Games.js';
import User from '../Models/Users.js';
import broadcast from '../broadcast.js';
import Logger from '../logger.js';
import Card from '../Models/Cards.js';
import shuffle from '../lib/fisher-yates-shuffle.js';

const router = express.Router();

router.get('/games', (req, res, next) => {
   Game.find({}).then( function(games) {
    console.log('/api/games');
       res.json(games);
   })
});

router.get('/games/:id', (req,res,next) => {
    Game.findById(req.params.id)
    .then( game => {
        if(!game) {res.status(400).send('game not found')}

        res.json(game);
    })
    .catch( err => {
        console.log(err);
    })
});

//maybe move most of this logic to the model????
router.post('/games/create' , (req, res, next) => {
    const newGame = new Game({owner: req.body.owner, title: req.body.title});
    newGame.players.push({user_id:req.user._id, username: req.user.username});

    newGame.save()
    .then(doc => {
        console.log(doc);
        res.json({msg:'ok', game_id: doc._id});
    })
    .catch(err => {
        console.log(err);
    })
})

router.post('/games/join', (req,res,next) => {
    Logger(req.body.game_id, 'Game ID FROM REQUEST');
    
    Game.join(req.body.game_id, req.user)
    .then(result => {
     
        console.log(JSON.stringify(result));
        // broadcast(req.app.get('io'), req.body.game_id, 'PLAYER_JOINED', data);
        res.status(200).json(result);
    })
    .catch(error => {
        Logger(JSON.stringify(error), 'Error in /games/join');
        res.json(error);
    })
})

//we need to standardize coding style. i know its my fault
router.post('/games/start', (req, res, next) => {
        console.log('hello from games/start');
        Game.start(req.body.gameID)
        .then(updatedGame => {
            res.json(updatedGame);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err:err});
        }) 
})


//----------- Start User (Profile) Routes-------------------

router.get('/users/:id', (req, res, next) => {
    
    console.log('this route even being touched');
    // Logger(req.params.id, 'URL PARAMS');

    User.findById(req.params.id)
    .then(user => {
        Logger(JSON.stringify(user), 'User returned from database');

        console.log('testing webpack');

        res.status(200).json(user);
    })
    .catch(err => {
        Logger(err, 'Error Object in route /users/:id');

    })
   
})

router.get('/test/deck', (req,res,next) => {
    Card.find({}).then(cards => {
        console.log('attempting shuffle');console.log('attempting shuffle');
        let shuffled = shuffle(cards);
        res.locals.shuffledDeck = shuffled;
        next();
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:'mongoose error in /test/deck'})
    })
}, (req, res, next) => {

    console.log('loggings res.locals', res.locals.shuffledDeck);
    const newGame = new Game({owner:'logan', title: 'shuffle test', gameCards: res.locals.shuffledDeck });

    console.log('saving new game with shuffled deck');

    newGame.save()
    .then(doc => {
        console.log(doc);
        res.json(doc);
    })
})

export default router;