import express from 'express';
import Game from '../Models/Games.js';
import User from '../Models/Users.js';
import broadcast from '../broadcast.js';
import Logger from '../logger.js';

const router = express.Router();

router.get('/games', (req, res, next) => {
   Game.find({}).then( function(games) {
    //    console.log(games);
    console.log('/api/games');
       res.json(games);
   })
});


router.get('/games/:id', (req,res,next) => {

    Game.findById(req.params.id)
    .then( game => {

        // if(err) { console.log(err)};

        // Logger(JSON.stringify(game), 'GET /games/:id');

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

    console.log('------------logging player before save----------');
    console.log(req.user);
    console.log();


    newGame.players.push({user_id:req.user._id, username: req.user.username});
    console.log('logging new Game', newGame);

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







export default router;