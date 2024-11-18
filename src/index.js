const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const { PORT } = require('./config/server_config.js');

const apiRouter = require('./routes/api_routes');

const responseTime = require('response-time');

// An application-level middleware is a function that is invoked for every request that comes to the app.
// app.use() helps us to register application-level middleware.
// The following in an application-level middleware that comes into the picture everytime a request is made to our server.

// Note that the order in which we register the middlewares is crucial as middlewares are also functions.

app.use(responseTime());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded( { extended: true } ));

app.use('/api' , apiRouter);

app.listen(PORT , () => {
    console.log("Server started....");
    console.log(`Server listening on port: ${PORT}`);
    console.log('\n');
} );