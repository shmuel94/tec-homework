const express = require("express"),
  app = express(),
  PORT = 8080;
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.collection("authors").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog");
//     dbo.collection("posts").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// function returnCollection(collections){
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("blog");
//         dbo.collection(`${collections}`).find({}).toArray(function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         });
//     })
// }
// returnCollection("posts");

// function returnCollection(collections){
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("blog");
//         dbo.collection(`${collections}`).find({}).toArray(function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             db.close();
//         });
//     })
// }
// returnCollection("authors");

// app.listen(PORT);