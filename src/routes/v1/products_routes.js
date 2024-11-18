const productsController = require('../../controllers/products_controller');

const express = require('express');

const productMiddlewares = require("../../middlewares/product_middlewares");

const v1_product_router = express.Router();

v1_product_router.get('/' , productsController.getAllProductsController);

v1_product_router.get('/:categories' , productsController.getAllProductCategoriesController);

v1_product_router.get('/:categories/:brand' , productsController.getAllBrandProductsController);

// Routing Layer ---> Middleware ----> Controller
v1_product_router.post('/' , productMiddlewares.createProductValidator , productsController.createProductController);

module.exports = v1_product_router;