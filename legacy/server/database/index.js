const { Sequelize, DataTypes } = require("sequelize");

<<<<<<< HEAD
const sequelize = new Sequelize("selling", "root", "root", {
=======
const sequelize = new Sequelize("selling", "root", "0657firasML", {
>>>>>>> 9913aab002d920a1dd04b4c89e4b20a1a4b3f19e
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;
db.Product = require("../models/ProductModels")(sequelize, DataTypes);
db.User = require("../models/UserModels")(sequelize, DataTypes);

db.admin = require("../models/adminModel")(sequelize, DataTypes);
db.Seller = require("../models/sellerModel")(sequelize, DataTypes);

db.Seller.hasMany(db.Product);
db.Product.belongsTo(db.Seller);
db.Panier = require("../models/panierModel")(sequelize, DataTypes);

db.User.belongsToMany(db.Product, { through: db.Panier });
db.Product.belongsToMany(db.User, { through: db.Panier });

// sequelize
//   .sync({alter:true})
//   .then(() => {
//     console.log("all good");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });
module.exports = db;