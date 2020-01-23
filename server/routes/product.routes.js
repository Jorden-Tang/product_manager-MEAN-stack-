const productController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("/api/product", productController.index);
    app.post("/api/product", productController.createNewProduct);
    app.get("/api/product/:id", productController.showProductDetail)
}