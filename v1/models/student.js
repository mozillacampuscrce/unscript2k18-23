var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({

  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  department:{
    type: String,
    required: true,
  },
  rollNo:{
    type: Number,
    required: true,
  },
  email: {
  type: String,
  unique: true,
  required: true,
  trim: true
},
  password: {
    type: String,
    required: true,
  },

}, { collection: 'students' });
var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
