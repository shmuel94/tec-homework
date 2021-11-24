console.log("app is loadoing");
const express = require("express"),
    PORT = 8080,
    mongoDB = require("mongodb"),
    MongoClient = mongoDB.MongoClient,
    mongoURL = "mongodb://localhost:27017/",
    app = express(),
    dbName = "jsonplaceholder",
    ObjectId = mongoDB.ObjectId,
    collectionName = "todos";

// need to parse json in request body
app.use(express.json());

app.get("/todos", (req, res) => {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        dbo.collection(collectionName).find({}).toArray(function (err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });
});

app.post("/todos", (req, res) => {
    MongoClient.connect(mongoURL, function (err, db) {
        if (err) throw err;
        const dbo = db.db(dbName);
        const itsUserId = req.body.itsUserId;
        const itsId = req.body.itsId;
        const itsTitle = req.body.itsTitle;
        const itsCompleted = req.body.itsCompleted;
        const newTodo = {
            userId: itsUserId,
            id: itsId,
            title: itsTitle,
            completed: itsCompleted
        };
        dbo.collection(collectionName).insertOne(newTodo, function (err, res) {
            if (err) throw err;
            console.log(res);
        })

    });
});

app.delete("/todos/:id", (req, res) => {
    MongoClient.connect(mongoURL, function (err, dbName) {
        if (err) console.log(err);
        const dbo = dbName.db("jsonplaceholder");
        dbo.collection(collectionName).deleteOne({
            _id: mongoDB.ObjectId(req.params.id)
        }, (err, doc) => {
            if (err) console.log(err);
            res.sendStatus(200)
        })
    });
});

app.patch("/todos/:id", (req, res) => {
    MongoClient.connect(mongoURL, function (err, dbName) {
        if (err) console.log(err);
        const dbo = dbName.db("jsonplaceholder");
        const newTodo = {
            itsTitle: req.body.itsTitle
        };
        console.log(newTodo);
        dbo.collection(collectionName).updateOne({_id: ObjectId(req.params.id)}, {$set: {newTodo}}, (error, response) => {
            if (error) {
                console.log(err);;
            }
            res.sendStatus(200);
        })
    });
});

app.get("/todos/:id", (req, res) => {
    MongoClient.connect(mongoURL, function (err, dbName) {
        if (err) console.log(err);
        const dbo = dbName.db("jsonplaceholder");
        const prams = req.body.itsId;
        const id = {itsId: prams}
        dbo.collection(collectionName).findOne(id,(error, response) => {
            if (error) {
                console.log(err);;
            }
            // console.log(res);
            res.send(response);
            res.sendStatus(200);
        })
});
});




app.listen(PORT);