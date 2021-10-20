'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const logger = require('./src/middleware/logger.js');
const validator = require('./src/middleware/validator.js');
const error404 = require('./src/error-handlers/404.js');
const error500 = require('./src/error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.get('/person', validator, handlePerson);

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
 