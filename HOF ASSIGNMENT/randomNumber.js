const delay = 3; // the delay in seconds
console.log(`Generating a random number after a delay of ${delay} seconds...`);
let countdown = delay;
const countdownInterval = setInterval(() => {
  console.log(`${countdown} seconds remaining...`);
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Generating the random number...");
    const randomNum = Math.floor(Math.random() * 101);
    console.log(`The generated random number is: ${randomNum}`);
  }
}, 1000);
