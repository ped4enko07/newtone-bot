const mongoose = require('mongoose');
const { mongo } = require('../config');

mongoose.connect(mongo.url, { useMongoClient: true });

require('../model/schema/user-schema');

module.exports = mongoose;