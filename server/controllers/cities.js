var mongoose = require('mongoose');
var City = mongoose.model('City');

module.exports = {
	show_all: function(req,res){
		City.find({}, function(err,cities){
		if (err){
			console.log('error!')
		}
		else {
			res.render('index', {city: cities})
		}
		})
	}, 
	show_by_id: function(req,res){
		City.find({_id: req.params.id}, function(err,cities){
		if (err){
			console.log('error!')
		}
		else {
			res.render('city', {city: cities})
		}
		})
	},
	add: function(req,res){
		console.log('POST DATA', req.body);
		var cityinfo = new City({name: req.body.name, country: req.body.country})
		cityinfo.save(function(err){
			if (err){
			console.log('sth wrong');
			}
			else {
			console.log('added city!');
			res.redirect('/');
			}
		}) 
	},
	update_page: function(req,res){
		City.find({_id: req.params.id}, function(err,cities){
			if (err){
				console.log('error!')
			}
			else {
				res.render('edit', {city: cities})
			}
		})
	},
	update: function(req,res){
		City.update({_id: req.params.id}, {name: req.body.name, country: req.body.country}, function(err,cities){
		if (err){
			console.log('error!')
		}
		else {
			res.redirect('/');
		}
		})
	},
	remove: function (req,res){
		City.remove({_id: req.params.id}, function(err,user){
			res.redirect('/');		
		})
	}
}