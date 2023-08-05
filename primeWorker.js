
// self.onmessage = function(event) {
//   const n = event.data.n;
//   generatePrime(n);
// };

// function generatePrime(n) {
//   let X = 0, i = 2;
//   let flag;

//   while (X < n) {
//       flag = true;

//       for (let j = 2; j <= Math.sqrt(i); j++) {
//           if (i % j === 0) {
//               flag = false;
//               break;
//           }
//       }

//       if (flag) {
//           postMessage(i);
//           X++;
//       }

//       i++;
//   }
// }
// primeWorker.js
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
