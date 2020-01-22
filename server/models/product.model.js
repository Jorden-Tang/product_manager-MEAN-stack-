const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
}, {timestamps: true});

const Product = mongoose.model("Manager", productSchema);
module.exports = Product