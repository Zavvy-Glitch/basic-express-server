'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js')
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(express.json());

const handlePerson = require('../src/handlePerson.js')

// Routes

// retrieves all persons
app.get('/person', logger, handlePerson, validator);

// retrieves ONE person
app.get('/person/:id', () => {
  
});

// creates a new person
app.post('/person', () => {
  
});

// updates a person
app.put('/person/:id', () => {
  
});

// deletes a person
app.delete('/person/:id', () => {
  
});

app.use(logger);
app.use(validator);
app.use(error404);
app.use(error500);

module.exports = app;
