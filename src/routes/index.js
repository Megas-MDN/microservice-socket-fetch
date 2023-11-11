const routes = require('express').Router();
const errorHandler = require('../middlewares/errorHandler');
const notImplemented = require('../middlewares/notImplemented');
const internalRoutes = require('./internalRoutes');
const sendMessageRoutes = require('./sendMessageRoutes');

const BASE_URL = '/api/v1';
routes.use(`${BASE_URL}/check`, internalRoutes);
routes.use(`${BASE_URL}/send`, sendMessageRoutes);

const avaliableRoutes = ['/tester', `${BASE_URL}/check`, `${BASE_URL}/send`];
routes.use((req, res, next) => notImplemented(req, res, next, avaliableRoutes));
routes.use(errorHandler);
module.exports = routes;
