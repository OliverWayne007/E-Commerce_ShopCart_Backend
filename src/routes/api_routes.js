const express = require('express');

const apiRouter = express.Router();

const v1_router = require('./v1/index.js');

const v2_router = require('./v2/index.js');

apiRouter.use('/v1' , v1_router);

apiRouter.use('/v2' , v2_router);

module.exports = apiRouter;