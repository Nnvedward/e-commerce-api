const express = require('express')
require('express-async-errors')
const UserRoutes = require('./src/routes/user.route')
const { PORT } = process.env
const bodyParser = require("body-parser")

const app = express()

// Parse JSON data
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Api routes
app.use(UserRoutes)

// Ping route for testing connection
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

// Listen to server port
app.listen(PORT, async () => {
    //Initialize MongoDB
    await require("./src/db/mongodb.config")()
    console.log(`:::> Server listening on port ${PORT} @ http://localhost:${PORT}`);
});

// On  server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});

module.exports = app