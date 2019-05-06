var express = require('express');

var app = express();

var port = process.env.PORT || 3010;


var mongoose = require('mongoose');

var db;
 if (process.env.ENV === 'Test'){
   db = mongoose.connect('mongodb://localhost/universities_test');
 }else{
   db = mongoose.connect('mongodb://localhost/universities');
 }

var bodyParser = require('body-parser');

var University = require('./models/university');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome to the Books API!");
});

app.listen(port, ()=> {
  console.log("App started using gulp on port", port);
})

module.exports = app;
