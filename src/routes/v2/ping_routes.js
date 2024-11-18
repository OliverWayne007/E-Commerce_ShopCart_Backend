const express = require('express');

const v2_ping_router = express.Router();

const pingController = require('../../controllers/ping_controller');

v2_ping_router.get('/' , pingController.pingController);

module.exports = v2_ping_router;