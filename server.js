const express = require('express')
require('express-async-errors')
const UserRoutes = require('./src/routes/user.route')
const AuthRoutes = require('./src/routes/auth.route')
const RoleRoutes = require('./src/routes/role.route')
const CategoryRoute = require('./src/routes/category.route')
const ManufacturerRoute = require('./src/routes/manufacturer.route')
const ItemRoute = require('./src/routes/item.route')

const { PORT } = process.env
const bodyParser = require("body-parser")

const app = express()

// Parse JSON data
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Api routes
app.use('/users', UserRoutes)
app.use('/auth', AuthRoutes)
app.use('/category', CategoryRoute)
app.use('/manufacturer', ManufacturerRoute)
app.use('/item', ItemRoute)
app.use(RoleRoutes)

// Ping route for testing connection
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

// Error middleware
require('./src/middlewares/error.middleware')(app)

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