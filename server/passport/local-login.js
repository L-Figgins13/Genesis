import jwt from "jsonwebtoken";
import { Strategy as PassportLocalStrategy } from "passport-local";
import User from "../Models/Users.js";
import config from "../../config/index.json";

const strat = new PassportLocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
    session: false,
    passReqToCallback: true
  },
  (req, username, password, done) => {
    const userData = {
      username: username.trim(),
      password: password.trim()
    };

    User.findOne({ username: userData.username })
      .then(user => {
        if (!user) {
          const error = new Error("User Could not be Located");
          console.log("User Does Not Exist");
          done(error);
        }

        user.comparePassword(userData.password).then(result => {
          if (result === true) {
            const payload = {
              sub: user._id
            };
            console.log("Success! Passwords match for user", user.username);
            console.log("Signing token with secret");

            const token = jwt.sign(payload, config.jwtSecret);

            const message = {
              success: true,
              userData: {
                id: user._id,
                username: user.username
              }
            };

            console.log("local-login strategy finished executing with success");

            done(null, token, message);
          } else {
            const message = {
              success: false
            };

            console.log("Incorrect Password");
            done(null, false, message);
          }
        });

        // const payload = {
        //     sub: user._id
        // };

        // const token = jwt.sign(payload, config.jwtSecret);

        // const data = {
        //     id: user._id,
        //     username: user.username
        // };
        // console.log('hello from local-login');
        // // Logger(data, 'user passed to login.jsx');

        // done(null, token, data);
      })
      .catch(err => {
        done(err);
      });
  }
);

export default strat;
