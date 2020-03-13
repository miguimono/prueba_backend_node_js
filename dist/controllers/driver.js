"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDriver = createDriver;
exports.getDriver = getDriver;
exports.deleteDriver = deleteDriver;
exports.updateDriver = updateDriver;
exports.getDriverById = getDriverById;
exports.getDriverByDate = getDriverByDate;
exports.asignDriverToOrder = asignDriverToOrder;
exports.releaseDriver = releaseDriver;

var _driver = _interopRequireDefault(require("../models/driver"));

var _order = _interopRequireDefault(require("../models/order"));

var _client = _interopRequireDefault(require("../models/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createDriver(_x, _x2) {
  return _createDriver.apply(this, arguments);
}

function _createDriver() {
  _createDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var name, newDriver;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name;
            _context.prev = 1;
            _context.next = 4;
            return _driver["default"].create({
              status: true,
              name: name
            }, {
              fields: ["status", "name"]
            });

          case 4:
            newDriver = _context.sent;

            if (!newDriver) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Conductor creado",
              data: newDriver
            }));

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createDriver.apply(this, arguments);
}

function getDriver(_x3, _x4) {
  return _getDriver.apply(this, arguments);
}

function _getDriver() {
  _getDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var driver;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _driver["default"].findAll({
              include: [{
                model: _order["default"],
                include: [{
                  model: _client["default"]
                }]
              }]
            });

          case 3:
            driver = _context2.sent;
            res.json({
              data: driver
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getDriver.apply(this, arguments);
}

function deleteDriver(_x5, _x6) {
  return _deleteDriver.apply(this, arguments);
}

function _deleteDriver() {
  _deleteDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCont;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _driver["default"].destroy({
              where: {
                id_driver: id
              }
            });

          case 4:
            deleteRowCont = _context3.sent;
            res.json({
              message: "Conductor borrada",
              count: deleteRowCont
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _deleteDriver.apply(this, arguments);
}

function updateDriver(_x7, _x8) {
  return _updateDriver.apply(this, arguments);
}

function _updateDriver() {
  _updateDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, name, driver;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            name = req.body.name;
            _context5.next = 5;
            return _driver["default"].findAll({
              attributes: ["id_driver", "name"],
              where: {
                id_driver: id
              }
            });

          case 5:
            driver = _context5.sent;

            if (driver.length > 0) {
              driver.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dr) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return dr.update({
                            name: name
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x17) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.json({
              message: "Driver updated",
              data: driver
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _updateDriver.apply(this, arguments);
}

function getDriverById(_x9, _x10) {
  return _getDriverById.apply(this, arguments);
}

function _getDriverById() {
  _getDriverById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, driverID;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _driver["default"].findOne({
              where: {
                id_driver: id
              },
              include: [{
                model: _order["default"]
              }]
            });

          case 4:
            driverID = _context6.sent;
            res.json({
              data: driverID
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getDriverById.apply(this, arguments);
}

function getDriverByDate(_x11, _x12) {
  return _getDriverByDate.apply(this, arguments);
}

function _getDriverByDate() {
  _getDriverByDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var date, driverID;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            date = req.params.date;
            _context7.next = 4;
            return _driver["default"].findOne({
              include: [{
                model: _order["default"],
                where: {
                  date: date
                }
              }]
            });

          case 4:
            driverID = _context7.sent;
            res.json({
              data: driverID
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _getDriverByDate.apply(this, arguments);
}

function asignDriverToOrder(_x13, _x14) {
  return _asignDriverToOrder.apply(this, arguments);
}

function _asignDriverToOrder() {
  _asignDriverToOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, id_order, driver;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            id_order = req.body.id_order;
            _context9.next = 5;
            return _driver["default"].findAll({
              attributes: ["id_driver", "status", "fk_id_order"],
              where: {
                id_driver: id
              },
              include: [{
                model: _order["default"]
              }]
            });

          case 5:
            driver = _context9.sent;

            if (driver.length > 0) {
              driver.forEach( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dr) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return dr.update({
                            status: false,
                            fk_id_order: id_order
                          });

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x18) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }

            return _context9.abrupt("return", res.json({
              message: "status updated",
              data: driver
            }));

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return _asignDriverToOrder.apply(this, arguments);
}

function releaseDriver(_x15, _x16) {
  return _releaseDriver.apply(this, arguments);
}

function _releaseDriver() {
  _releaseDriver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var id, driver;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = req.params.id;
            _context11.next = 4;
            return _driver["default"].findAll({
              attributes: ["id_driver", "status", "fk_id_order"],
              where: {
                id_driver: id
              },
              include: [{
                model: _order["default"]
              }]
            });

          case 4:
            driver = _context11.sent;

            if (driver.length > 0) {
              driver.forEach( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(dr) {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return dr.update({
                            status: true,
                            fk_id_order: null
                          });

                        case 2:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x19) {
                  return _ref3.apply(this, arguments);
                };
              }());
            }

            return _context11.abrupt("return", res.json({
              message: "status updated",
              data: driver
            }));

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 9]]);
  }));
  return _releaseDriver.apply(this, arguments);
}