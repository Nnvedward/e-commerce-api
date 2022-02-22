const app = require('express')()
require('express-async-errors')

port = process.env.PORT

// Listen to server port
app.listen(port, async () => {
    //Initialize MongoDB
    await require("./src/db/mongodb.config")()
    console.log(`:::> Server listening on port ${port} @ http://localhost:${port}`);
});

// On  server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});