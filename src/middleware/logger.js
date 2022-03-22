'use strict';

module.exports = function (req, res, next) {
  
  let method = req.method;
  if (method === 'GET') {
    console.log(req.method);
    next();
  } else {
    next('Error - Something Went Wrong');
  }
};
