const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

console.log('>>>db config', dbConfig);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.fieldType = require("./field-type.model")(sequelize, Sequelize);
db.form = require("./form.model")(sequelize, Sequelize);
db.formMetadata = require("./form-metadata.model")(sequelize, Sequelize);

module.exports = db;