const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: String,
});

module.exports.Message = mongoose.model("Message", messageSchema);
