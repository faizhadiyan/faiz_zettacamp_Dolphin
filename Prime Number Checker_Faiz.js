/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  //kurang dari 1 bukan prime
  if (n <= 1) {
    return false;
  }

  //dari 2 sampe n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(10));
console.log(isPrime(43));
console.log(isPrime(1));
console.log(isPrime(307));
console.log(isPrime(37));
