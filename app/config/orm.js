var connection = require('./connection.js');
//export orm to be used in burger.js
//orm object will hold methods to modify data
var orm = {
    //all method selects all data from table and callback will allow us to use this in burger.js file
    all: function(tableInput, callback){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, res){
          if(err)throw err;
          callback(res);
        })
    },
    //table input = burgers
    update: function(tableInput, objColVals, condition, callback){
        connection.query('UPDATE ' + tableInput + ' + SET devoured = true WHERE id= ' + condition + ';' ,function(err,result){
            if(err)throw err;
            callback(result);
        })
    },
    create: function(tableInput, objColVals, callback){
        connection.query('INSERT INTO' + tableInput +' (burger_name) VALUES ("' + objColVals + '");', function(err, result){
            if(err)throw err;
            callback(result)
        })
    }
};

module.exports = orm;