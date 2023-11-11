const route = require('express').Router();
const controller = require('../controllers/sendMessageController');

route.get('/test/:id', controller.sendTestMessageController);
route.post('/message', controller.sendMessageController);
module.exports = route;
