import db from '../db.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.methods.comparePassword = function comparePassword(password,callback) {
    bcrypt.compare(password, this.password, callback);
};



UserSchema.pre('save', function saveHook(next) { 
    const user = this;

    if(!user.isModified('password')) { return next()};

    return bcrypt.genSalt((saltError, salt) => {
        if (saltError) {return next(saltError); }

        return bcrypt.hash(user.password, salt, (hashError, hash) => {
            if(hashError) { return next(); }

            user.password = hash;

            return next();
        });
    });
});

export default mongoose.model('User', UserSchema);




