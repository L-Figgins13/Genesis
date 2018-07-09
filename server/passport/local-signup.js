// check to make sure i am doing somethign twice.. later after this is done
import { Strategy as PassportLocalStrategy } from "passport-local";
import User from "../Models/Users";

const LocalStrategy = new PassportLocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
    session: false,
    passReqToCallback: true
  },
  (req, username, password, done) => {
    const newUser = new User({ username, password });
    console.log("Creating New user", newUser);
    newUser.save(err => {
      if (err) {
        return done(err);
      }

      return done(null);
    });
  }
);

export default LocalStrategy;
