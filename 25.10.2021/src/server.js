const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080,
  publicPath = path.join(__dirname, "..", "public");
const axios = require("axios");
const hbs = require("hbs"),
  viewsPath = path.join(__dirname, "..", "templates","views"),
  partialsPath = path.join(__dirname, "..", "templates","partials");
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("index");
  
});

app.get("/city", (req, res)=>{
  const cityName = `${req.query.city}`;
  const API_KEY = "24eb1f3865b172500862dbea676d5d22";
  console.log(req.query.city);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  axios
  .get(url)
  .then(function (response) {
      if(response.status === 200){
          console.log(response.data);
          res.render("city",{somekey1:`${response.data.name}`, somekey2: `${response.data.coord.lon}`, somekey3: `${response.data.coord.lat}`});
      }
  })
  .catch(function (error) {
      res.render("error");
  });

});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});