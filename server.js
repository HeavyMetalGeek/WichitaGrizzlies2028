var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/css', express.static(__dirname + '/css'));

var server = app.listen(8082, () => {
  console.log("See http://grizzly-fatirishman53.c9users.io:8082...")
});