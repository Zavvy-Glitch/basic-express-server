'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { describe } = require('yargs');

const request = supertest(server.server);

describe('Testing Persons Server', () => {
  it('Should respond with a new Person on GET to /person', async () => {

    const response = await request.get('/person');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Fred');
  });
});