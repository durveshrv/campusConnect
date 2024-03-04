const mongoose = require("mongoose");

const bikerSchema = new mongoose.Schema({
  bikeno: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  licensecheck: {
    type: Boolean,
    required: true,
  },
  helmetcheck: {
    type: Boolean,
  },
  location: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true
  }
});
const Biker = mongoose.model("Biker", bikerSchema);

module.exports = Biker;
