const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
var mongoURL = "mongodb://localhost:27017";

// MongoClient.connect(mongoURL, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog2");
// addId(dbo, "617ebc2fdae716b64efb0b1f", "617e811d60ad6cb52e78ba93");
//     addId2(dbo, "617ebc2fdae716b64efb0b1f", "617e811d60ad6cb52e78ba95");
// });

// const addId = (dbo, aId, pId)=>{
//     dbo.collection("authors").updateOne({_id: ObjectId(aId)},{$push :{posts:pId}}, (err,res)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(res);
//     })
// }

// const addId2 = (dbo, aId, pId2)=>{
//     dbo.collection("authors").updateOne({_id: ObjectId(aId)},{$push :{posts:pId2}}, (err,res)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(res);
//     })
// }

// MongoClient.connect(mongoURL, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog2");
//     printDocument(dbo, "authors")
// });

// function printDocument(dbo, collection) {
//     dbo.collection(collection).find({}).toArray((err, docoment) => {
//         if (err) throw err;
//         docoment.forEach(element => {
//             if (element.posts.length) {
//                 console.log(element);
//             }
//         });
//     });
// }

// MongoClient.connect(mongoURL, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog2");
//     printDocumentByAge(dbo, "authors")
// });

// function printDocumentByAge(dbo, collection) {
//     dbo.collection(collection).find({}).toArray((err, docoment) => {
//         if (err) throw err;
//         docoment.forEach(element => {
//             if (element.age < 40) {
//                 console.log(element);
//             }
//         });
//     });
// }

// MongoClient.connect(mongoURL, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog2");
//     printDocumentByAge(dbo, "authors")
// });

// function printDocumentByAge(dbo, collection) {
//     dbo.collection(collection).find({}).toArray((err, docoment) => {
//         if (err) throw err;
//         docoment.forEach(element => {
//             if (element.age >= 20 && element.age <= 60) {
//                 console.log(element);
//             }
//         });
//     });
// }

// MongoClient.connect(mongoURL, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("blog2");
//         printDocumentByAge(dbo, "authors")
//     });

//     function printDocumentByAge(dbo, collection) {
//         dbo.collection(collection).find({}).limit(4).toArray((err, docoment) => {
//             if (err) throw err;
//             docoment.forEach(element => {
//                 if (element.age >= 20 && element.age <= 60) {
//                     console.log(element);
//                 }
//             });
//         });
//     }

// MongoClient.connect(mongoURL, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("blog2");
//     printDocumentByAge(dbo, "authors")
// });

// function printDocumentByAge(dbo, collection) {
//     dbo.collection(collection).find({}, {projection:{
//         _id: 0,
//         name: 1,
//         age: 1,
//         posts: 1
//     }}).toArray((err, docoment) => {
//         if (err) throw err;
//         console.log(docoment);
//     })
// }

const operation = process.argv[2];
const id = process.argv[3];
const name = process.argv[4];
const age = process.argv[5];
const posts = process.argv[6];
const obj = { name, age, posts };

MongoClient.connect(mongoURL, (error, connection) => {
  if (error) {
    throw error;
  }
  const blogDB = connection.db("blog2");
  switch (operation) {
    case "add":
      blogDB.collection("authors").insertOne(obj, (error, doc) => {
        if (error) {
          throw error;
        }
        console.log(doc);
      });
      break;
    case "update":
        blogDB.collection("authors").updateOne({_id: ObjectId(id)}, {$set: obj}, (error, response) => {
            if(error){
                throw error;
            }
            console.log(response);
        })
      break;
    case "delete":
        blogDB.collection("authors").deleteOne({_id: ObjectId(id)}, (error, response) => {
            if(error){
                throw error;
            }
            console.log(response);
        })
      break;
    case "print one":
        blogDB.collection("authors").findOne({_id: ObjectId(id)}, (error, doc) => {
            if(error){
                throw error;
            }
            console.log(doc);
        })
      break;
    case "print all":
        blogDB.collection("authors").find({}).toArray((error, docs) => {
            if(error){
                throw error;
            }
            console.log(docs);
        })
      break;
    default:
        console.log("ERROR!");
      break;
  }
});
