import express from 'express';
import validator from 'validator';
import passport from 'passport';

const router = new express.Router();

//probably a syntatical error here (fixed)

router.post('/signup', (req, res, next) => { 
 passport.authenticate('local-signup', (err)=>{ 

    console.log('Code executing in server side /signup route');
        
        //this is error code for when mongo tries to save a unique field twice
        if( err && err.name === 'MongoError' && err.code === 11000) {
            console.log(err);

           return res.status(500).json({
                success: false,
                message: 'Username Already Taken!',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'You have created a user'
        });
    })(req,res,next);
})


router.post('/login', (req,res,next) => {
    passport.authenticate('local-login', (err, token, message)=>{
    if (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }

    if (!token) {
        console.log('no token returned. incorrect password');
        
        //message.success should be false
        res.json({
            success: message.success,
            user: message.userData
        })
    }

    //code only makes it here if there has been a token created    
    res.json({
        success: message.success,
        message: 'You have logged in',
        token: token,
        user: message.userData
    });
    
})(req,res,next);
})

export default router;

