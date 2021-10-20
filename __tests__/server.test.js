'use strict';

const server = require('../app.js');
const supertest = require('supertest');

const request = supertest(server.server);

describe('Testing our Persons Server', () => {
  it('Should respond with a new Person on GET to /person', async () => {

    const response = await request.get('/person');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Fred');
  });
});