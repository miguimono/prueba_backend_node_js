"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var driver = _database.sequelize.define('driver', {
  id_driver: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  //status = true (disponible); status = false (no disponible)
  status: {
    type: _sequelize["default"].BOOLEAN
  },
  name: {
    type: _sequelize["default"].STRING
  },
  fk_id_order: {
    type: _sequelize["default"].INTEGER
  }
}, {});

module.exports = driver;