var express = require('express');
const { getName } = require('../services/user.service');
const { isAuthorized } = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/', isAuthorized, function(req, res, next) {
  res.send('Hello');
});

router.post('/', function(req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send('Data is saved');
  } else {
    res.status(400).send("User wasn't saved");
  }
});

module.exports = router;