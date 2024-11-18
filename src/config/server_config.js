const dotenv = require('dotenv');

// console.log(process.env.PORT);

dotenv.config();   // dotenv.config() loads the environment variables present in the .env file to the process.env object.

// console.log(process.env.PORT);

module.exports = {
    PORT: process.env.PORT
}