"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var my_address = _database.sequelize.define('address', {
  id_address: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  address: {
    type: _sequelize["default"].TEXT
  },
  fk_id_client: {
    type: _sequelize["default"].INTEGER
  }
}, {});

module.exports = my_address;