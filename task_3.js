let arr = [1,2,3,4,5,6,7,8,9,0]

function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(`${element} is a prime number`);
    } else {
      console.log(`${element} is NOT a prime number`);
    }
  });