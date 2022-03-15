var express = require("express");
var router = express.Router();

router.get("/test", function (req, res, next) {
  res.send({ message: "it is working." });
});

module.exports = router;
