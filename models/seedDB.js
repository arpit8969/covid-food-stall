var mongoose = require("mongoose");
var Stall = require("./stall_coords");
 
var data = [
    {
        latitude: 22,
        longitude: 81
    },
    {
        latitude: 20,
        longitude: 88
    },
    {
        latitude: 22.6,
        longitude: 78.9
    },
    {
        latitude: 19.6,
        longitude: 78.1
    },
    {
        latitude: 25.6,
        longitude: 75.9
    }
];
 
function seedDB(){
   Stall.remove({}, function(err){
        if(err){
            console.log(err);
        }
            data.forEach(function(seed){
                Stall.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    }
                });
            });
    });
}
 
module.exports = seedDB;