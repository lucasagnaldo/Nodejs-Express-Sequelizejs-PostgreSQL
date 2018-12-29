const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  logging: env.logging,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Models/tables
db.customers = require('../model/customer.model.js')(db.sequelize, db.Sequelize);
db.users = require('../model/user.model.js')(db.sequelize, db.Sequelize);
db.sales = require('../model/sale.model.js')(db.sequelize, db.Sequelize);


// Associations
db.sales.belongsTo(db.customers, { foreignKey: 'id_customer'} );

module.exports = db;