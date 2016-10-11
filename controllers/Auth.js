'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.authLoginPOST = function authLoginPOST (req, res, next) {
  Auth.authLoginPOST(req.swagger.params, res, next);
};

module.exports.authLoginPUT = function authLoginPUT (req, res, next) {
  Auth.authLoginPUT(req.swagger.params, res, next);
};
