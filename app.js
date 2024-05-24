const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

//router
app.get('/movie',(req,res)=>{
    res.send("movies from server...")
})

module.exports = app;