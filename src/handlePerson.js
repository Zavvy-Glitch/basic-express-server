'use strict';

function handlePerson(req, res) {
  let { name } = req.query;
  res.status(200).send(name);
}

module.exports = handlePerson;