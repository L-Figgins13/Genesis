import db from '../db.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const StatsSchema = new Schema({
    wins: {type:Number, default: 0},
    losses: {type: Number, default: 0}
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    stats: StatsSchema 
});

UserSchema.methods.comparePassword = function comparePassword(password,callback) {
    bcrypt.compare(password, this.password, callback);
};


// a very cool way to gen salts /hash << using mongoose middleware
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




