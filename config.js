require("dotenv").config()
module.exports = {
    port:process.env.PORT,
    postgresPassword:process.env.POSTGRES_PASSWORD,
    jwt:process.env.JWTSECRET||"mysecret",
    jwtexp:process.env.JWTEXP||"1d"
}