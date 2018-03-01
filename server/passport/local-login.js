import jwt from 'jsonwebtoken';
import User from '../Models/Users.js';
import {Strategy as LocalStrategy} from 'passport-local';
import config from '../../config';


const strat = new PassportLocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req,username,password,done) => {

    const userData = {
        username: username.trim(),
        password: password.trim()
    };

    User.findOne({username: userData.username})
    .then(user => {
        if(!user) {
            const error = new Error('Incorrect Email or Password');
            error.name = 'fuck you';
            
            console.log(user);
            done(error);
        }

        const payload = {
            sub: user._id
        };

        const token = jwt.sign(payload, config.jwtSecret);

        console.log("Logging Token:", token);

        const data = {
            name: user.username
        };

        done(null, token, data);
    })
    .catch(err => {
        done(err);
    })
})

export default strat;