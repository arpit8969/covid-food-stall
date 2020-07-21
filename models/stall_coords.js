var mongoose = require('mongoose');

var stallSchema = new mongoose.Schema({
	latitude: String,
	longitude: String
});

var stall = mongoose.model('Stall',stallSchema);

module.exports = stall;