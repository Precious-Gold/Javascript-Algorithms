
function checkForPrime(number){
    let prime = true;
    
    if (number === 1) {
        console.log("1 is a prime number");
    }
    
    else if (number > 1) {
    
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                prime = false;
                break;
            }
        }
    
        if (prime) {
           return console.log(`${number} is a prime number`);
        } else {
            return console.log(`${number} is a not prime number`);
        }
    }
    
    // check if number is less than 1
    else {
        return console.log("The number is not a prime number.");
    }
}
checkForPrime(23)