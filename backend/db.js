const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "qwe",
    host: "localhost",
    port: "5432",
    database: "test_table"
})

module.exports = pool