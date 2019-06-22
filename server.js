var cors = require('cors')


var express = require('express');
var app = express();
var fs = require("fs");
app.use(cors())
app.get('/listlaptops', function (req, res) {
   fs.readFile( __dirname + "/" + "laptop.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
app.post('/addrating', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "laptop.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["rating"] = req["rating"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})