var n;
var primes = [];
if (n != int(n)) {
  console.log("Veuillez entrer un nombre entier")
};

if (n < 0) {
  console.log("Veuillez entrer un nombre positif")
};

var squareRoot = Math.sqrt(n);
for (let i=2, int(squareRoot), i++) {
  if (n%i === 0) {
    primes.push(i);
  };
};
