// Write a function that accepts a number and return a boolean based on whether it's a prime number

function primeNumber(number) {
    if(number < 2) return false;
    for(let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false;
        }
    }
    return true;
}
module.exports = primeNumber;
