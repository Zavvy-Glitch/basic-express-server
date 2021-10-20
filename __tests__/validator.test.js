'use strict';

const validator = require('../src/middleware/validator.js');
const error = require('../src/error-handlers/500.js');

describe('Testing the Validator middleware', () => {
  let req = {method: 'GET', query: {}};
  let res = {status: jest.fn()};
  let next = jest.fn();
  
  it('Should throw an error if there is no name', () => {
    req.query.name = undefined;
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).toHaveBeenCalledWith(500);

  });
});