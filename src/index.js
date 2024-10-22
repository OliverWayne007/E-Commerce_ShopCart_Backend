const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log("Server started....");
    console.log(`Server listening on port: ${PORT}`);
} );