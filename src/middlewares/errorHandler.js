module.exports = (err, _req, res, _next) => {
  return res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Error Server' });
};
