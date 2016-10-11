'use strict';

var url = require('url');


var Admin = require('./AdminService');


module.exports.adminLoginPOST = function adminLoginPOST (req, res, next) {
  Admin.adminLoginPOST(req.swagger.params, res, next);
};

module.exports.adminRoomsAddRoomPUT = function adminRoomsAddRoomPUT (req, res, next) {
  Admin.adminRoomsAddRoomPUT(req.swagger.params, res, next);
};

module.exports.adminRoomsAddRoomTypePOST = function adminRoomsAddRoomTypePOST (req, res, next) {
  Admin.adminRoomsAddRoomTypePOST(req.swagger.params, res, next);
};

module.exports.adminRoomsAddRoomTypePUT = function adminRoomsAddRoomTypePUT (req, res, next) {
  Admin.adminRoomsAddRoomTypePUT(req.swagger.params, res, next);
};

module.exports.adminRoomsChangeRoomStatusPOST = function adminRoomsChangeRoomStatusPOST (req, res, next) {
  Admin.adminRoomsChangeRoomStatusPOST(req.swagger.params, res, next);
};
