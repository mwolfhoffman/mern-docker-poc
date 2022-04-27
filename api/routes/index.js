var express = require("express");
const { default: mongoose } = require("mongoose");
var router = express.Router();
const { Message } = require("../models/message");

router.get("/test", async (req, res, next) => {
  let items = await Message.find();

  if (!items[0]) {
    //  Create first message if none exist.
    await Message.create({
      text: "This is a message coming from the mongo database. Docker is working!",
    });
    items = await Message.find();
  }

  return res.send({ message: items[0].text });
});

module.exports = router;
