const express = require('express');
const order = require('../controllers/order');
const route = express.Router();

route.get("/current",order.current_order)
route.post("/buy",order.buy_order)
route.post("/sell",order.sell_order)

module.exports = route;