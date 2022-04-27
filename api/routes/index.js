var express = require("express");
var router = express.Router();

router.get("/test", function (req, res, next) {
  res.send({ message: "This is a message coming from the API container. Docker is working!" });
});

module.exports = router;
