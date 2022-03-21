const Schema = require("mongoose").Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
    default: 0,
  },
  ma: {
    type: Number,
    required: true,
    default: 0,
  },
  st: {
    type: Number,
    required: true,
    default: 0,
  },
  ag: {
    type: Number,
    required: true,
    default: 0,
  },
  pa: {
    type: Number,
    default: 0,
  },
  av: {
    type: Number,
    required: true,
    default: 0,
  },
  skills: {
    type: String,
  },
  primary: {
    type: String,
    required: true,
  },
  secondary: {
    type: String,
    required: true,
  },
});

module.exports = playerSchema;
