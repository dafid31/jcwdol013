/* Number 1
SET celcius EQUALS  60      
FORMULA = (celcius * 1.8)+32
*/
let celcius = 60;
let formula = (celcius * 1.8) + 32;

console.log("if 60 celcius convert to fahrenheit is ", formula);
console.log("");


/* Number 2
SET number EQUALS odd or even number

IF number %2 ==1 THEN 
PRINT ("this is a odd number")
ELSE 
PRINT ("this is a even number")
*/

function oddOreven(number) {

    if (number % 2 == 1) {
        console.log("this is a odd number");
    } else {
        console.log("this is a even number");
    }

    return number;
}
oddOreven(2);
oddOreven(25);

console.log("");

// Number 3

const Isprime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true;
};

console.log(Isprime(6));
console.log(Isprime(5));
console.log("");

// Number 4

const sumOfNumber = (num) => {
    let sum = 0;
    let recordsum = "";

    for (let i = 1; i <= num; i++) {
        recordsum += i !== num ? `${i} + ` : `${i}`;
        sum += i;


    }
    console.log(`Sum of Number 1 into ${num} is ${recordsum} = ${sum} `);
}

sumOfNumber(5);
sumOfNumber(3);
console.log("");
// Number 5

const facOfNumber = (num) => {
    let factorial = 1;
    let recordfactor = "";

    for (let i = num; i >= 1; i--) {
        recordfactor += i !== 1 ? `${i} X ` : `${i}`;
        factorial *= i;

    }
    console.log(`Factorial of ${num}! is ${recordfactor} =${factorial}`);
}

facOfNumber(4);
facOfNumber(6);

// Number 6

const fibonacciNumbers = (number) => {
    const fibonacci = (n) => {
        // return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

        return Math.round(
            (1 / Math.sqrt(5)) * ((1 + Math.sqrt(5)) / 2) ** n -
            (1 / Math.sqrt(5)) * ((1 - Math.sqrt(5)) / 2) ** n,
        );
    };

    console.log(fibonacci(number));
};

fibonacciNumbers(10)
