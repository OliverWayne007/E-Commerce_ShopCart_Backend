const productsController = require('../../controllers/products_controller');

const express = require('express');

const v2_product_router = express.Router();

v2_product_router.get('/' , productsController.getAllProducts);

v2_product_router.get('/:categories' , productsController.getAllProductCategories);

v2_product_router.get('/:categories/:brand' , productsController.getAllBrandProducts);

module.exports = v2_product_router;