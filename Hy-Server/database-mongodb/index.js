const mongoose = require('mongoose');
const config= require('../config/database')
mongoose.connect(config.database, () => {
  console.log("Data Base connecté");
});
const db = mongoose.connection;

module.exports = db;
