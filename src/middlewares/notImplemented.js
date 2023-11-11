module.exports = (req, res, _next, avaliableRoutes) => {
  return res.status(501).json({
    message: 'Rota não implementada',
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
    'avaliable-routes': avaliableRoutes,
  });
};
