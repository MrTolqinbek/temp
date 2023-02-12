class ErrorApp extends Error {
    constructor(message,statusCode,errorCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.errorCode = errorCode||"err001"
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = ErrorApp;