'use strict';

let MongoClient = require('mongodb').MongoClient;

module.exports = {
  fetch_test: function() {
    console.log("test!!!!!!");
    MongoClient.connect('mongodb://localhost:27017/animals', function(err, client){
       if(err) throw err;

       let db = client.db('animals');
       db.collection('mammals').find().toArray(function(err, result){
         if(err) throw err;
         console.log(result);
         client.close();
       });
    });

    return {};
  }
};
