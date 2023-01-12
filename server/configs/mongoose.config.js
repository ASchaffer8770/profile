const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Database is Connected.'))
    .catch(err => console.log('Something went wrong connecting to the Database', err))