const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const ContactSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  }
});

const contact = module.exports = mongoose.model('Contact', ContactSchema);
