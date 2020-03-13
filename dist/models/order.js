"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _driver = _interopRequireDefault(require("./driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var my_order = _database.sequelize.define('order', {
  id_order: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  date: {
    type: _sequelize["default"].DATE
  },
  min_hour: {
    type: _sequelize["default"].TIME
  },
  max_hour: {
    type: _sequelize["default"].TIME
  },
  fk_id_client: {
    type: _sequelize["default"].INTEGER
  }
}, {});

my_order.hasOne(_driver["default"], {
  foreignKey: 'fk_id_order',
  sourceKey: 'id_order'
});

_driver["default"].belongsTo(my_order, {
  foreignKey: 'fk_id_order',
  sourceKey: 'id_order'
});

module.exports = my_order;