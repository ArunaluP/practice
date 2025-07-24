let min = 1;
let max = 100;

const number = Math.ceil(Math.random()*(max - min) + min)

let isTrue = false
let attempts = 0

while (!isTrue) {
    let guess  =  window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);
    attempts++;

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        
    }else if(guess < min || guess > max) {
        window.alert(`Please enter a number between ${min} and ${max}.`);
    }else{
        if (guess === number) {
            alert("Congratulations! You guessed the number in " + attempts + " attempts!");
            isTrue = true;
        } else if (guess < number) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
}