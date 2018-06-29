#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  avatarNumber: {type: Number, index: true, required: true, unique: true },
  name: {type: String, required: true },
  imageURL: {type: String}
});

const Avatar = mongoose.model('Avatar', AvatarSchema);
 
mongoose.connect('mongodb://localhost/genesis')
.then( () => {
    console.log('mongodb connected');
    mongoose.Promse = global.Promise;

    const files = fs.readdirSync("./static/img/avatars/");
    console.log(files);

    files.forEach( file => {
        let fileName = file.split('.')[0].trim();
        let fileEXT = file.split('.')[1].trim();
        let avatarNumber = parseInt(fileName.split('_')[0].trim(), 10);
        let avatarName = fileName.split('_')[1].trim();
        let avatarImageUrl = path.join(path.normalize(path.resolve(__dirname, '..'), 'static/img/avatars/', file));

        console.log('filename:', fileName, 'avatarNumber:', avatarNumber, 'avatarName:', avatarName, 'URL:' , avatarImageUrl);
        

        const newAvatar = new Avatar({
            name: avatarName,
            avatarNumber: avatarNumber ,
            imageURL: avatarImageUrl
        });

        newAvatar.save()
        .then( doc => {
            console.log(doc);
        })
        .catch(err => {
            console.log(err);
        })

        
    })
}).catch(err => {
    console.log('error connecting: ', err);
});