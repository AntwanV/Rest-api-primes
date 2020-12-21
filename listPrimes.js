function isPrime (n) {
  if (n < 2) return false;
  const q = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function listPrimes (n) {
  let l = [];
  let squareRoot =  Math.sqrt(n);
  let i;
  for (i = 0; i < n; i++) {
    if (isPrime(i)) {
      l.push(i);
    }
  }
  return [squareRoot, l];
}

module.exports = listPrimes;
