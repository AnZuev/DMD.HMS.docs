'use strict';

var url = require('url');


var UsualUsers = require('./UsualUsersService');


module.exports.adminOrdersCancelPOST = function adminOrdersCancelPOST (req, res, next) {
  UsualUsers.adminOrdersCancelPOST(req.swagger.params, res, next);
};

module.exports.ordersCancelPOST = function ordersCancelPOST (req, res, next) {
  UsualUsers.ordersCancelPOST(req.swagger.params, res, next);
};

module.exports.ordersGET = function ordersGET (req, res, next) {
  UsualUsers.ordersGET(req.swagger.params, res, next);
};

module.exports.ordersPayPOST = function ordersPayPOST (req, res, next) {
  UsualUsers.ordersPayPOST(req.swagger.params, res, next);
};

module.exports.roomsBookPUT = function roomsBookPUT (req, res, next) {
  UsualUsers.roomsBookPUT(req.swagger.params, res, next);
};

module.exports.roomsGetAvailableRoomsGET = function roomsGetAvailableRoomsGET (req, res, next) {
  UsualUsers.roomsGetAvailableRoomsGET(req.swagger.params, res, next);
};

module.exports.roomsGetTypesGET = function roomsGetTypesGET (req, res, next) {
  UsualUsers.roomsGetTypesGET(req.swagger.params, res, next);
};
