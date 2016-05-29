var mongoose = require('mongoose');
var city = require('../controllers/cities.js');

module.exports = function(app){
	app.get('/', function(req,res){
		city.show_all(req,res);
	})
	app.get('/cities/new', function(req,res){
		city.show_by_id(req,res);
	})
	app.post('/cities/new', function(req,res){
		city.add(req,res)
	})
	app.get('/cities/:id', function(req,res){
		city.show_by_id(req,res)
	})	
	app.get('/cities/:id/edit', function(req,res){
		city.update_page(req,res)
	})
	app.post('/cities/:id/edit', function(req,res){
		city.update(req,res)
	})
	app.get('/cities/:id/delete', function(req,res){
		city.remove(req,res)
	})
}