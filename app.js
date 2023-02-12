const express = require("express")
const helmet = require('helmet')
const cors = require('cors');
const ErrorController = require("./controllers/ErrorController.js");
const ErrorApp = require("./utils/ErrorApp.js");
const JSdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const options = require("./swagger.js");
const specs = JSdoc(options);
const app = express()
const authRoute=require("./routes/authRoute.js")
app.use(helmet())
app.use(cors())
app.use(express.json())



app.use(authRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.all('*', async (req, res, next) => {
    return next(new ErrorApp(`page not found ${req.hostname}${req.originalUrl}`,404,"auth001"))
});
app.use(ErrorController)


module.exports = app