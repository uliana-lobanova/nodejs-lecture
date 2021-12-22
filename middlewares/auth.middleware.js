const isAuthorized = (req, res, next) => {
  if (req.headers.authorization === 'admin') {
    next();
  } else {
    res.status(401).send();
  }
};

module.exports = { isAuthorized };