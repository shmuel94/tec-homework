const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const PORT = 8080;
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));


app.get("/city", (req,res)=>{
    const cityName = `${req.query.city}`;
    const API_KEY = "24eb1f3865b172500862dbea676d5d22";
    console.log(req.query.city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
    .get(url)
    .then(function (response) {
        console.log(response);
        console.log("it's good");
        if(response.status === 200){
            console.log(response.data);
            res.send(`name: ${response.data.name}, longitude: ${response.data.coord.lon}, latitude:${response.data.coord.lat}`);
        }
    })
    .catch(function (error) {
        res.sendFile(path.join(__dirname, "public", "err.html"));
    });

});
app.listen(PORT);
console.log("app is running");