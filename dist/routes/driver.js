"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _driver = require("../controllers/driver");

var router = (0, _express.Router)();
router.post('/', _driver.createDriver);
router.get('/', _driver.getDriver);
router.get('/:id', _driver.getDriverById);
router["delete"]('/:id', _driver.deleteDriver);
router.get('/date/:date', _driver.getDriverByDate);
router.put('/:id', _driver.updateDriver);
router.put('/asignDriver/:id', _driver.asignDriverToOrder);
router.put('/releaseDriver/:id', _driver.releaseDriver);
var _default = router;
exports["default"] = _default;