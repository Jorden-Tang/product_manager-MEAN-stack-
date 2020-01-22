const express = require('express');
const app = express();
const cors = require('cors');

//middleware that expects request body to be json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



//attach app with routes
require('./server/routes/product.routes')(app)
require('./server/config/mongoose.config');

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});