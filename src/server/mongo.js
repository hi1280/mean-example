const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGODB_URI || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri);
}

module.exports = {
  connect,
  mongoose
};
