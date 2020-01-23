const Product = require('../models/product.model')

module.exports = {
    createNewProduct(req, res){
        Product.create(req.body)
            .then( (newProduct) => res.json({newProduct: newProduct}))
            .catch( (err) => res.json({message: "error creating product", error: err}))
    },
    index(req, res){
        Product.find()
            .then((allProducts)=> res.json({allProducts: allProducts}))
            .catch((err) => res.json({message: "error getting all products", error: err}))
    },
    showProductDetail(req, res){
        Product.findById(req.params.id)
            .then((productDetail) => res.json({detail: productDetail}))
            .catch((err) => res.json({message: "error finding detail of one product", error: err}))
    },
}