'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logger middleware', () => {
  
  let req = {method: 'GET', query:{}};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to log a method', () => {

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called', () => {
    req.method = 'PUT';

    logger(req, res, next);
    expect(next).toHaveBeenCalledWith('Something Went Wrong');
  });
});