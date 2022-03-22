'use strict';

module.exports = (error, req, res, next) => {
  res.status(404).send('Bad Route Not Found');
  res.end();
};
