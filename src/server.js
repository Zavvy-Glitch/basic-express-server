'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

// Routes

// retrieves all persons
app.get('/person', validator,  handlePerson);

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

function handlePerson(request, response) {
  console.log('handlePerson', request);
  let { name } = request.query;
  response.status(200).send(name);
}

app.use(error404);
app.use(error500);

module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`Server Is Running on ${PORT}`)),
};
 