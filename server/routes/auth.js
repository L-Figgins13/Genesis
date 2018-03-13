import express from 'express';
import validator from 'validator';
import passport from 'passport';

const router = new express.Router();

//probably a syntatical error here (fixed)

router.post('/signup', (req, res, next) => { 
 passport.authenticate('local-signup', (err)=>{ 

    console.log('Code executing in server side /signup route');

        if(err) {
            console.log(err);

           return res.status(400).json({
                success:false,
                message: 'error in signup post',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'You have created a user'
        });
    })(req,res,next);
})


router.post('/login', (req,res,next) => {
    passport.authenticate('local-login', (err, token, userData)=>{
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
    
})(req,res,next);
})

export default router;

