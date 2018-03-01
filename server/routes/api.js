import express from 'express';
import Game from '../Models/Games.js';

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
    if (req.params.id === game._id){
        console.log('found the game mother fucker');
        res.json(game);
     } else {
         console.log('gameID does not match');
         res.status(500).send('game not found');
     }

});

router.post('/games/create' , (req, res, next) => {
   const newGame = new Game({owner: req.body.owner, title: req.body.title});
    console.log('fuck me sideways');
    newGame.save()
    .then(doc => {
        console.log(doc);
        res.json({msg:'ok'});
    })
    .catch(err => {
        console.log(err);
    })
})

export default router;