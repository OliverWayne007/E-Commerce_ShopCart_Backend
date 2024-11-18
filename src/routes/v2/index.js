const express = require('express');

const v2_router = express.Router();

const v2_ping_router = require('./ping_routes');

const v2_product_router = require('./product_routes');

v2_router.use('/ping' , v2_ping_router);

v2_router.use('/products' , v2_product_router);

module.exports = v2_router;