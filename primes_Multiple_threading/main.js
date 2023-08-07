

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
