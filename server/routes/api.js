const express = require('express');
const router = express.Router();

const games = [
    {
        _id: 1,
        owner: 'logan',
        title: 'Best Game Ever'},
    {
        _id: 2,
        owner: 'zach',
        title: 'Jeez i suck',
    },
    {
        _id: 3,
        owner: 'derek',
        title: 'Where am I'
    }
]


router.get('/games', (req, res, next) => {
    if(games) { 
    res.json({records: games})
  } else {
        res.status(500).json({message: `Internal Server Error: ${error}`});
    }
});

module.exports = router;