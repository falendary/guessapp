var mysql = require('mysql');
var express = require('express');
var app = express();
//
// var bodyParser = require('body-parser');
// app.use(bodyParser);

var port = 8083;

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "123456",
  port: ''
});



  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //
  //
  //   con.query("CREATE DATABASE guessappdb", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  //
  //   con.query("CREATE TABLE attempts (min INT(255), max INT(255), attempts_left INT(255), number_to_guess INT(255), player_guess INT(255))", function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });
  //
  // });



app.use(express.static('dist'));


app.get('/', function (req, res) {
  res.sendFile('index.html');
});
//
// app.post('/api/guess', function (req, res) {
//
//   var min = parseInt(req.body.min, 10);
//   var max = parseInt(req.body.max, 10);
//   var attempts_left = parseInt(req.body.attempts_left, 10);
//   var number_to_guess = parseInt(req.body.number_to_guess, 10);
//   var player_guess = parseInt(req.body.player_guess, 10);
//
//   con.query("INSERT INTO attempts (min, max, attempts_left, number_to_guess, player_guess) VALUES (" + min + ", " + max + ", " + attempts_left + ", " + number_to_guess + ", " + player_guess + ",)", function (err, result) {
//     if (err) throw err;
//     console.log("Logged");
//   });
//
//   console.log('here?');
//   return res.json({success: true});
// });

app.listen(port, function () {
  console.log('server started at', port);
});
