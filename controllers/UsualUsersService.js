'use strict';

exports.adminOrdersCancelPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * cancelOrderItem (CancelOrderItem)
  **/
    var examples = {};
  examples['application/json'] = {
  "roomNumber" : "",
  "cost" : "",
  "from" : "aeiou",
  "to" : "aeiou",
  "state" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.ordersCancelPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * cancelOrderItem (CancelOrderItem)
  **/
    var examples = {};
  examples['application/json'] = {
  "roomNumber" : "",
  "cost" : "",
  "from" : "aeiou",
  "to" : "aeiou",
  "state" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.ordersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "roomNumber" : "",
  "cost" : "",
  "from" : "aeiou",
  "to" : "aeiou",
  "state" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.ordersPayPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * orderInvoiceItem (OrderInvoiceItem)
  **/
    var examples = {};
  examples['application/json'] = {
  "roomNumber" : "",
  "cost" : "",
  "from" : "aeiou",
  "to" : "aeiou",
  "state" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.roomsBookPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * bookItem (RoomBookModel)
  **/
    var examples = {};
  examples['application/json'] = {
  "roomNumber" : "",
  "cost" : "",
  "from" : "aeiou",
  "to" : "aeiou",
  "state" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.roomsGetAvailableRoomsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * search (RoomSearchModel)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "roomNumber" : "",
  "type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.roomsGetTypesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "cost" : "",
  "description" : "aeiou",
  "photo" : "aeiou",
  "id" : "",
  "type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

