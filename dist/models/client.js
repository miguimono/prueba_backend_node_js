"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _address = _interopRequireDefault(require("./address"));

var _order = _interopRequireDefault(require("./order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = _database.sequelize.define('client', {
  id_client: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].STRING
  },
  lastname: {
    type: _sequelize["default"].STRING
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  phone: {
    type: _sequelize["default"].STRING
  }
}, {});

client.hasMany(_address["default"], {
  foreignKey: 'fk_id_client',
  sourceKey: 'id_client'
});

_address["default"].belongsTo(client, {
  foreignKey: 'fk_id_client',
  sourceKey: 'id_client'
});

client.hasMany(_order["default"], {
  foreignKey: 'fk_id_client',
  sourceKey: 'id_client'
});

_order["default"].belongsTo(client, {
  foreignKey: 'fk_id_client',
  sourceKey: 'id_client'
});

module.exports = client;