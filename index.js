//Modules
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

//Routing
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/error404', function(req, res){
  res.render('error404');
});

app.listen(3000);
