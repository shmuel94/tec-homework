const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8080;
const fileName = "comments.json";
app.use(express.json());
// const comments = JSON.parse(fs.readFileSync(fileName,"utf8"));
app.get("/", (req, res) => {
  res.send(`<h1>hi my name is bombo</h1>`);
  // res.send(fs.readFileSync(fileName,"utf8"));
});

app.get("/comments", (req, res) => {
  res.send(fs.readFileSync(fileName,"utf8"));
});

let freeId = 0;
app.post("/comments", (req, res) => {
  const name = req.body.name;
  const body = req.body.body;
  const mail = req.body.mail;
  if (name != undefined) {
    const comments = JSON.parse(fs.readFileSync(fileName,"utf8"));
    const newComment = { name: name, body: body, mail: mail, id: freeId };
    comments.push(newComment);
    freeId++; 
    fs.writeFileSync(fileName,JSON.stringify(comments));
  return res.sendStatus(201);
}
res.sendStatus(400); 
});
app.get("/comments:id", (req, res) => {
  const comments = JSON.parse(fs.readFileSync(fileName,"utf8"));
  const id = req.params.id;
  let comment = comments.find((element) => element.id == id);
  return comment ? res.send(comment) : res.sendStatus(404);
});

app.delete("/comments/:id", (req, res) => {
  const comments = JSON.parse(fs.readFileSync(fileName,"utf8"));
  const id = req.params.id;
  let comment = comments.findIndex((element) => element.id == id);
  if (comment == -1) {
    return res.sendStatus(404);
  }
  comments.splice(comment, 1);
  fs.writeFileSync(fileName,JSON.stringify(comments));
  res.send("have deleted");
  res.sendStatus(200);
});


 
app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});