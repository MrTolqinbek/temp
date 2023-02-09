require("dotenv").config()
module.exports = {
    port:process.env.PORT,
    postgresPassword:process.env.POSTGRES_PASSWORD
}