const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Connected to product manager database! Success!"))
    .catch(err => console.log("data base error", err))