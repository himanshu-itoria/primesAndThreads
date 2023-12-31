
self.onmessage = event => {
  const { start, end } = event.data;
  let primes = [];

  for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
          primes.push(num);
      }
  }

  self.postMessage(primes);
};

function isPrime(n) {
  console.log("sudhsdks");
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  
  return true;
}
