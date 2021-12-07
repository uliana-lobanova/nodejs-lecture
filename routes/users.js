var express = require('express');
const { isAuthorized } = require('../middlewares/auth.middleware');
const { saveName } = require('../services/user.service');

var router = express.Router();

router.get('/', isAuthorized, function(req, res, next) {
  res.send("Hello!");
})

router.post('/', function(req, res, next) {
  const result = saveName(req.body);

  if (result) {
    res.send("Data is saved");
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;
