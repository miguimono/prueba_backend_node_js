"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.getOrder = getOrder;
exports.getClient = getClient;
exports.getOrderById = getOrderById;
exports.deleteOrder = deleteOrder;
exports.updateOrder = updateOrder;

var _order = _interopRequireDefault(require("../models/order"));

var _client = _interopRequireDefault(require("../models/client"));

var _address = _interopRequireDefault(require("../models/address"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createOrder(_x, _x2) {
  return _createOrder.apply(this, arguments);
}

function _createOrder() {
  _createOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, lastname, email, phone, address, date, min_hour, max_hour, newClient, newOrder, newAddress;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, phone = _req$body.phone, address = _req$body.address, date = _req$body.date, min_hour = _req$body.min_hour, max_hour = _req$body.max_hour;
            _context.prev = 1;
            console.log(parseInt(min_hour));
            console.log(parseInt(max_hour));
            console.log(parseInt(max_hour) - parseInt(min_hour));

            if (!(parseInt(min_hour) <= parseInt(max_hour))) {
              _context.next = 27;
              break;
            }

            if (!(parseInt(max_hour) - parseInt(min_hour) <= 8)) {
              _context.next = 24;
              break;
            }

            _context.next = 9;
            return _client["default"].create({
              name: name,
              lastname: lastname,
              email: email,
              phone: phone
            }, {
              fields: ["name", "lastname", "email", "phone"]
            });

          case 9:
            newClient = _context.sent;
            _context.next = 12;
            return _order["default"].create({
              date: date,
              min_hour: min_hour,
              max_hour: max_hour,
              fk_id_client: newClient.id_client
            }, {
              fields: ["date", "min_hour", "max_hour", "fk_id_client"]
            });

          case 12:
            newOrder = _context.sent;
            _context.next = 15;
            return _address["default"].create({
              address: address,
              fk_id_client: newClient.id_client
            }, {
              fields: ["address", "fk_id_client"]
            });

          case 15:
            newAddress = _context.sent;

            if (!newClient) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Cliente creado",
              data: newClient
            }));

          case 18:
            if (!newOrder) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Orden creada",
              data: newOrder
            }));

          case 20:
            if (!newAddress) {
              _context.next = 22;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Direccion creada",
              data: newAddress
            }));

          case 22:
            _context.next = 25;
            break;

          case 24:
            return _context.abrupt("return", res.json({
              message: "Debe haber una separacion maxima de 8 horas entre hora mininma (min_hour) y hora maxima (max_hour)"
            }));

          case 25:
            _context.next = 28;
            break;

          case 27:
            return _context.abrupt("return", res.json({
              message: "La hora mininma (min_hour) debe ser mayor que la hora maxima (max_hour)"
            }));

          case 28:
            _context.next = 33;
            break;

          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 30]]);
  }));
  return _createOrder.apply(this, arguments);
}

function getOrder(_x3, _x4) {
  return _getOrder.apply(this, arguments);
}

function _getOrder() {
  _getOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var orders;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _order["default"].findAll({
              include: [{
                model: _client["default"],
                include: [{
                  model: _address["default"]
                }]
              }]
            });

          case 3:
            orders = _context2.sent;
            res.json({
              data: orders
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
  return _getOrder.apply(this, arguments);
}

function getClient(_x5, _x6) {
  return _getClient.apply(this, arguments);
}

function _getClient() {
  _getClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var clients;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _client["default"].findAll({
              include: [{
                model: _address["default"]
              }]
            });

          case 3:
            clients = _context3.sent;
            res.json({
              data: clients
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getClient.apply(this, arguments);
}

function getOrderById(_x7, _x8) {
  return _getOrderById.apply(this, arguments);
}

function _getOrderById() {
  _getOrderById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, clientID;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _client["default"].findOne({
              where: {
                id_client: id
              },
              include: [{
                model: _address["default"]
              }]
            });

          case 4:
            clientID = _context4.sent;
            res.json({
              data: clientID
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOrderById.apply(this, arguments);
}

function deleteOrder(_x9, _x10) {
  return _deleteOrder.apply(this, arguments);
}

function _deleteOrder() {
  _deleteOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCont;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _order["default"].destroy({
              where: {
                id_order: id
              }
            });

          case 4:
            deleteRowCont = _context5.sent;
            res.json({
              message: "Orden borrada",
              count: deleteRowCont
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteOrder.apply(this, arguments);
}

function updateOrder(_x11, _x12) {
  return _updateOrder.apply(this, arguments);
}

function _updateOrder() {
  _updateOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, date, min_hour, max_hour, my_order;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, date = _req$body2.date, min_hour = _req$body2.min_hour, max_hour = _req$body2.max_hour;
            _context7.next = 5;
            return _order["default"].findAll({
              attributes: ["id_order", "date", "min_hour", "max_hour"],
              where: {
                id_order: id
              }
            });

          case 5:
            my_order = _context7.sent;

            if (my_order.length > 0) {
              my_order.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(order) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return order.update({
                            date: date,
                            min_hour: min_hour,
                            max_hour: max_hour
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context7.abrupt("return", res.json({
              message: "Order updated",
              data: my_order
            }));

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return _updateOrder.apply(this, arguments);
}