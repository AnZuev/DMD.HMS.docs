'use strict';

exports.adminLoginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authData (UserAuthData)
  **/
    var examples = {};
  examples['application/json'] = {
  "role" : "aeiou",
  "id" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.adminRoomsAddRoomPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * room (Room)
  **/
  // no response value expected for this operation
  res.end();
}

exports.adminRoomsAddRoomTypePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roomType (RoomType)
  **/
    var examples = {};
  examples['application/json'] = {
  "cost" : "",
  "description" : "aeiou",
  "photo" : "aeiou",
  "id" : "",
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.adminRoomsAddRoomTypePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roomType (RoomType)
  **/
    var examples = {};
  examples['application/json'] = {
  "cost" : "",
  "description" : "aeiou",
  "photo" : "aeiou",
  "id" : "",
  "type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.adminRoomsChangeRoomStatusPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * room (Room_1)
  **/
    var examples = {};
  examples['application/json'] = {
  "roomNumber" : "",
  "type" : "aeiou",
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

