// Modules/variables
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use(express.static('assets'));

// Routing
app.get('/', function(req, res) {
  res.render('index');
});

// Finding primes
let myFunction = require('./listPrimes');

// Post Request
app.post('/primeJSON', urlencodedParser, function(req, res) {
  let n = Number(req.body.numberChosen);
  if (n>0 && Math.floor(n) === n) {
    let primes = myFunction(n)[1];
    let squareRoot = myFunction(n)[0];
    let data = { squareRoot: squareRoot, primes: primes };
    let obj = {object: data};
    res.send(JSON.stringify(data));
  } else {
    res.status(400).send({error: "Input an positive integer"})
  };
});

app.listen(3000);
