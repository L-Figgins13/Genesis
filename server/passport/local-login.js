import jwt from 'jsonwebtoken';
import User from '../Models/Users.js';
import {Strategy as PassportLocalStrategy} from 'passport-local';
import config from '../../config/index.json';


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
            console.log(user);
            done(error);
        }

        const payload = {
            sub: user._id
        };

        const token = jwt.sign(payload, config.jwtSecret);

        console.log("Logging Token:", token);

        const data = {
            username: user.username
        };

        done(null, token, data);
    })
    .catch(err => {
        done(err);
    })
})

export default strat;