const express = require('express');

const v1_router = express.Router();

const v1_product_router = require('./products_routes');

const v1_ping_router = require('./ping_routes');

v1_router.use('/products' , v1_product_router);

v1_router.use('/ping' , v1_ping_router);

module.exports = v1_router;