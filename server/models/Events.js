const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  platform: {
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
  meetlink1: {
    type: String,
    required: true,
  },
  appt: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return !isNaN(value.getTime());
      },
      message: 'Invalid date',
    },
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
