'use strict';

exports.authLoginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authData (UserAuthData)
  **/
    var examples = {};
  examples['application/json'] = {
  "firstName" : "aeiou",
  "fatherName" : "aeiou",
  "id" : "",
  "secondName" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.authLoginPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (UserDataSignUpModel)
  **/
    var examples = {};
  examples['application/json'] = {
  "firstName" : "aeiou",
  "fatherName" : "aeiou",
  "id" : "",
  "secondName" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

