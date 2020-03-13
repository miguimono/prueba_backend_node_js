"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _order = require("../controllers/order");

var router = (0, _express.Router)();
router.post('/', _order.createOrder);
router.get('/', _order.getOrder);
router.get('/:id', _order.getOrderById);
router["delete"]('/:id', _order.deleteOrder);
router.get('/client', _order.getClient);
router.put('/:id', _order.updateOrder);
var _default = router;
exports["default"] = _default;