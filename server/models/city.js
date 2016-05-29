var mongoose = require('mongoose');

//schema
var CitySchema = new mongoose.Schema({
	name: String,
	country: String
})

//model
var City = mongoose.model('City', CitySchema);