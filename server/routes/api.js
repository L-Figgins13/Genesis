import express from 'express';
import Game from '../Models/Games.js';
import User from '../Models/Users.js';
import broadcast from '../broadcast.js';

const router = express.Router();

const game = {
    _id: '5a84d940441f6514587f40aa',
    players: [
        {
            _id: 1,
            username: 'Logan',
        },

        {
            _id: 2,
            username: 'Zach',
        },

        {
            _id: 3,
            username: 'James',
        }
    ]
}

router.get('/games', (req, res, next) => {
   Game.find({}).then( function(games) {
       console.log(games);
       res.json(games);
   })
});

router.get('/games/:id', (req,res,next) => {

    Game.findById(req.params.id)
    
    .then( game => {

        // if(err) { console.log(err)};

        console.log('-------------- Logging Game After Populate Call -------------')
        console.log(game);
        console.log();

        console.log('-----Attempting to log username directly from game.player object---------');
        console.log(game.players[0].username);

        if(!game) {res.status(400).send('game not found')}

        res.json(game);
    })
    .catch( err => {
        console.log(err);
    })



    // if (req.params.id === game._id){
    //     console.log('found the game mother fucker');
    //     res.json(game);
    //  } else {
    //      console.log('gameID does not match');
    //      res.status(500).send('game not found');
    //  }

});

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
    //expects a game id and a user object <<<< (not just an id)
    console.log('-------checking req.user ---------');
    console.log(req.user);
    console.log();
    
    Game.join(req.body.game_id, req.user)
    .then(updatedGame => {
        console.log(updatedGame);
        broadcast(req.app.get('io'),req.body.game_id, 'PLAYER_JOINED', updatedGame);
        res.json(updatedGame);
    })
})

export default router;