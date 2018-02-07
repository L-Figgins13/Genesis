const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/genesis')
.then( () => {
    console.log('mongodb connected');
}).catch(err => {
    console.log('error connecting: ', err);
});

module.exports = mongoose;