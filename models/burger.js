//requiring orm
var orm = require('../config/orm.js');
//this object will modify our orm
var burger = {
    all: function(callback){
        //burgers is our burger table in our database
        //the callback function sends this method into our model
        orm.all('burgers', function(res){
            callback(res);
        })
    },
    create: function(cols, vals, callback){
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    update: function(objColVals, condition, callback){
        orm.update("burgers", objColVals, condition, callback, function(req, res){
            callback(res);
        });
    }
};

module.exports = burger;