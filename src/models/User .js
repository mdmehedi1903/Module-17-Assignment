const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
  firstName: { type: String, trim:true, required: true},
  lastName: {type: String, trim:true, required: true},
  email: {type: String, trim:true, required: true,unique: true},
  password: {type: String, trim:true, required: true},
  address: {type: String, default: null},
  phoneNumber: {type: String, default: null}
},
{
    timestamps: true, 
    versionKey: false
});

const User = mongoose.model('Users', DataSchema);

module.exports = User;
