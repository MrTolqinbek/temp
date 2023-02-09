const express = require("express")
const helmet = require('helmet')
const morgan = require('morgan');
const cors = require('cors');


//create function that allows add numbers


const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.all('*', async (req, res, next) => {
    return next(new Error(""))
});

module.exports = app