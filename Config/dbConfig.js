const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r5saknw.mongodb.net/test`)
    .then(() => {
        console.log('Database connect successfully'.bold.cyan)
    })
    .catch(err => {
        console.log(err);
    })