// // main.js
// alert("hjh");

// // console.time()
// function startPrimeGeneration() {
//   alert("aknkas");
//   console.log("hello");
//   console.time('Prime Generation'); 
//     const startTime = Date.now();

//     const worker = new Worker('primeWorker.js');
    
//     worker.onmessage = function(event) {
//         const prime = event.data;
//         const outputDiv = document.getElementById('output');
// //         outputDiv.textContent += prime + '\n';
// //     };
    
// //     worker.postMessage({ n: 10000 }); 

// //     worker.onmessage = function() {
// //         // const endTime = performance.now();
// //         // const timeElapsed = endTime - startTime;
// //         // const timeElapsedDiv = document.getElementById('timeElapsed');
// //         // timeElapsedDiv.textContent = 'Time Elapsed: ' + timeElapsed.toFixed(2) + ' ms';
// //         // console.endTime();
        
// //     };
// //     console.timeEnd('Prime Generation'); 
// //     const endtime = Date.now();
// //     const dur = endtime-startTime;
// //     document.querySelector('.answer').innerHTML = dur.toString();
// //     console.log("hello world");
// // }
// // main.js
// document.addEventListener('DOMContentLoaded', () => {
//     const startButton = document.getElementById('startButton');
//     startButton.addEventListener('click', startPrimeCalculation);
// });

// function startPrimeCalculation() {
//     const numWorkers = 4;
//     const maxNumber = 1000000000;
//     const rangeSize = Math.ceil(maxNumber / numWorkers);
   
//     const workers = [];

//     for (let i = 0; i < numWorkers; i++) {
//         const start = i * rangeSize + 1;
//         const end = Math.min((i + 1) * rangeSize, maxNumber);

//         const worker = new Worker('primeWorker.js');
//         worker.postMessage({ start, end });

//         worker.onmessage = event => {
//             const primesInRange = event.data;
//             displayPrimes(primesInRange);
//         };

//         workers.push(worker);
//     }
// }

// function displayPrimes(primes) {
//     const resultDiv = document.getElementById('result');
//     primes.forEach(prime => {
//         resultDiv.innerHTML += prime + ', ';
//     });
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const startButton = document.getElementById('startButton');
//     startButton.addEventListener('click', startPrimeCalculation);
// });
document.getElementById('startButton').addEventListener('click', startPrimeCalculation);
function startPrimeCalculation() {
    console.log("hello");
    // alert("Hello");
    const numWorkers = 4;
    const maxNumber = 10000;
let rangeSize = Math.floor(maxNumber / numWorkers);
   
    const workers = [];
    // alert("Hello 3worklddshtfh");
    console.log("hello there");
//     for (let i = 0; i < numWorkers; i++) {
//         let start = i * rangeSize + 1;
//         let end = Math.min((i + 1) * rangeSize, maxNumber);
// console.log("wsdsdddssd");
//         let worker = new Worker('primeWorker.js');
//         worker.postMessage({ start, end });

//         worker.onmessage = event => {
//             const primesInRange = event.data;
//             displayPrimes(primesInRange);
//         };
let worker = new Worker('primeWorker.js');
        worker.postMessage(2,1000000);

        worker.onmessage = event => {
            const primesInRange = event.data;
            displayPrimes(primesInRange);


        // workers.push(worker);
    }

}

function displayPrimes(primes) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const primesList = document.createElement('ul');
    primes.forEach(prime => {
        const primeItem = document.createElement('li');
        primeItem.textContent = prime;
        primesList.appendChild(primeItem);
    });
    
    resultDiv.appendChild(primesList);
}
