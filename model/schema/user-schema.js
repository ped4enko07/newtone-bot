const mongoose = require('../../libs/mongoose');
const User = require('../user');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  user_telegram_id: Number,
});

userSchema.loadClass(User);
module.exports = mongoose.model('User', userSchema);
