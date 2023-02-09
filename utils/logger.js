const { format } = require("morgan");
const winston = require("winston");
const loggerConfig = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log" ,level:"error"}),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
  ),
};

module.exports =  winston.createLogger(loggerConfig);;