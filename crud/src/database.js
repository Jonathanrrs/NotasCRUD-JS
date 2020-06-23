const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notasapp', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));