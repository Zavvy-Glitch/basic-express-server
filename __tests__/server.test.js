'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(server);

describe('Testing our Persons Server', () => {
  it('Should respond with a new Person on GET /person', async () => {
    const name = {name:'test' };
    const response = await request.get('/person').query(name);

    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
});