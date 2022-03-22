'use strict';

module.exports = function (req, res, next) {
  
  let method = req.method;
  if (method === 'GET') {
    next();
  } else {
    next('Error - Something Went Wrong');
  }
};
