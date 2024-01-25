const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    hostel_name: String,
    address: String,
    phoneno: String,
    department: String,
    year: String,
    room_type: String,
    image:String,
  }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
