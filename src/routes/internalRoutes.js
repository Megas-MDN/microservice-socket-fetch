const route = require('express').Router();

route.get('/', (req, res) => {
  return res.status(200).send('Server Up!');
});
module.exports = route;
