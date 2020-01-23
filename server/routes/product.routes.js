const productController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("/api/product", productController.index);
    app.post("/api/product", productController.createNewProduct);
    app.get("/api/product/:id", productController.showProductDetail);
    app.put("/api/product/:id/edit", productController.updateProduct);
    app.delete("/api/product/:id/delete", productController.deleteProduct);
}