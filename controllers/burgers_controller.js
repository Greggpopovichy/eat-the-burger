var express = require("express");
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        //passes burger data into function
        res.render('index',{burger_data});
    });

});

router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;