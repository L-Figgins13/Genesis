import express from 'express';
import validator from 'validator';
import passport from 'passport';

const router = new express.Router();

//probably a syntatical error here

router.post('/signup', (req, res, next) => { 
 passport.authenticate('local-signup', (err)=>{ 
        if(err) {
            console.log(err);

            res.status(400).json({
                success:false,
                message: 'error in signup post',
            })
        }

        res.status(200).json({
            success: true,
            message: 'You have created a user'
        });
    })
})


passport.authenticate('local-login', passport.authenticate('local-login', (err, token, userData)=>{
    if (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }

    res.json({
        success:true,
        message: 'You have logged in',
        token,
        user:userData
    });
    
}))

export default router;

