var express    = require('express'),
	mongoose   = require('mongoose'),
	bodyParser = require('body-parser'),
	request    = require('request'),
	ejs        = require('ejs'),
	Stall      = require('./models/stall_coords.js'),
	seedDB     = require('./models/seedDB.js');


var app = express();

mongoose.connect("mongodb://localhost/food", {useNewUrlParser: true, useUnifiedTopology: true} );


// Routes

app.get("/",function(req,res){
	console.log(req.params);
	console.log(req.query);
	res.render("home.ejs",{API_KEY: 'AIzaSyD9HU7Feq2twmfWa4mhRJ0yEAfT_VM5YjU', dest_coord: '22,83'})
});

app.get("/show",function(req,res){
	var source = req.query.scoord;

	var decord = "28,88", distance = 9999999;

	var tes = "";

	var query1 = Stall.find({}).exec(function(err,points){
		if(err)res.render(err);
		else{
			points.forEach(function(point){
				//console.log(decord);
				var pcoord = (point.latitude+","+point.longitude);
				
				//compare the distance
				if(1){
					decord = pcoord;
				}

			});

			console.log(decord);

			res.render("show.ejs",{API_KEY: 'AIzaSyD9HU7Feq2twmfWa4mhRJ0yEAfT_VM5YjU', src_coord: source ,dest_coord: decord});

		}
	});

	//var result1 = await query1.exec();
	
	// console.log(decord);

	// res.render("show.ejs",{API_KEY: 'AIzaSyD9HU7Feq2twmfWa4mhRJ0yEAfT_VM5YjU', src_coord: source ,dest_coord: decord});
});



//


function started(){
	seedDB();
	console.log("Server has started...");
}

app.listen(3000,started);