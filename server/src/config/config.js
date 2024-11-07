const { Sequelize } = require("sequelize");

module.exports = {
    port: process.env.PORT ||8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD,
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
        }
    }
}
