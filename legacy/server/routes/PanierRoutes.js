const routerPa = require("express").Router();
const {
  getUserCart,
  addToPanier,
  remove,
} = require("../controllers/panierControlle.js");

routerPa.get("/usercart/:id", getUserCart);
routerPa.post("/usercart", addToPanier);
routerPa.delete("/del/:productId", remove);

module.exports = routerPa;
