const express = require('express');

const v1_ping_router = express.Router();

const pingController = require('../../controllers/ping_controller');

// ---------------------------------------------------------------------------------------------------------------------------------

// A middleware is a function that has access to:
// 1. Request object
// 2. Response object
// 3. next middleware function

// function requestChecker(request , response , next)
// {
//     console.log("Checking the request....");

//     // If everything looks good, forward the request to the next middleware function

//     next();   // requestLogger

//     console.log("Ending check request");
// }

// function requestLogger(request , response , next)
// {
//     console.log("Logging the request....");

//     next();   // authChecker

//     console.log("Ending log request");
// }

// function authChecker(request , response , next)
// {
//     console.log("Checking authorisation....");

//     next();  // pingController.pingController

//     console.log("Ending auth check");
// }

// v1_ping_router.get('/' , [requestChecker , requestLogger , authChecker] , pingController.pingController);


// ---------------------------------------------------------------------------------------------------------------------------------


// Mapping the http method and the route to the controller
v1_ping_router.get('/' , pingController.pingController);


module.exports = v1_ping_router;