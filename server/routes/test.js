//for postman test routes only
// to be removed before production build

import express from "express";
import Card from "../Models/Cards.js";
// import winston from 'winston';

// var logger = new (winston.Logger)({
//     transports: [
//       new (winston.transports.Console)(),
//       new (winston.transports.File)({ filename: 'alog.log' })
//     ]
//   });

const router = express.Router();

router.get("/deck"),
  (req, res, next) => {
    // Card.find({}).then(cards => {
    //         // THIS NEVER LOGS FOR SOME FUCKING REASON
    //         console.log('hello');
    //         data = {
    //             testString: 'hello from test route'
    //         }
    //         res.json(data);
    // }

    res.json({ testString: "hello from test route" });
  };

export default router;
