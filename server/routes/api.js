import express from 'express';
import Game from '../Models/Games.js';
import User from '../Models/Users.js';
import broadcast from '../broadcast.js';


const router = express.Router();

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
        const data = {
            newGameState: updatedGame,
            newPlayer: updatedGame.players[players.length-1]
        }
        console.log(updatedGame);
        broadcast(req.app.get('io'), req.body.game_id, 'PLAYER_JOINED', data);
        res.status(200).json(updatedGame);
    })
})


//----------- Start User (Profile) Routes-------------------

router.get('/users/:id', (req, res, next) => {
    
    console.log('this route even being touched');
    // Logger(req.params.id, 'URL PARAMS');

    User.findById(req.params.id)
    .then(user => {
        // Logger(JSON.stringify(user), 'User returned from database');

        res.status(200).json(user);
    })

   
})







export default router;