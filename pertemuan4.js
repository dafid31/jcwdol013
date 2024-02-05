// function declaration

function squareArea(s){
return s*s;
}
console.log(squareArea(78));

// function expression
const cube=function(s) {
    return s*s*s;
};
console.log(cube(3));


// function scope

function hello(){
    let greeting="morning ";
    console.log("hello");
    console.log("good " + greeting);
}
hello();

// default parameter

function balok(p,l,t=5){
    return p*l*t;
}

console.log(balok(6.10));

// rest parameter 

console.log("a","b","c","d");
console.log("a","b","c","d","a","b","e");

function myFunc(a,b,  ...resParams){
    console.log(...resParams);
    console.log(resParams);
}


// nested function

function getMessage(firstName){
    function sayHello(){
        return "Hello" + firstName + " . "
    }

    function welcomeMessage(){
        return "Welcome To Purwadhika"
    }
    return sayHello() + " " + welcomeMessage();
}

const message=getMessage("david");
console.log(message);

// closure      :merupakan nilai balik di dalam function 
function greeting(name){
    const defaultMeassage="hello";
    return function(){
        return defaultMeassage + name;
    }
};
const greetingDavid=greeting("david");
console.log(greetingDavid());

// cuurying

function multiplier(factor){
return function(number){
    return number * factor;
};
}

console.log(multiplier(3)(5));

// recursive

function countDown(fromNumber){
console.log(fromNumber);

let nextNumber=fromNumber - 1;
if (nextNumber >0) {
    countDown(nextNumber)
}
}
countDown(10);

// arrow function

const balok3 = (p,l,t) =>{
return p * l * t;
}
console.log(balok3(2,4,8));

const person=()=>{
    this.name="david";
    console.log(this.name);
    console.log(this);
};
const person2=()=>"pratama";

person();
console.log(person2());

// ----------------------------------------------------------------

// EXCERCISE 1
function trianglePanttern(height){
    let counter=1;
    // looping jumlah baris
    for (let i = 1;  i <= height ;i ++) {
        let row="";
        // looping jumlah item based on baris keberapa
     for(let j = 1;j<=i;j++){

       row += (counter < 10 ? "0":"") + counter +" ";
        counter++;
     }
     console.log(row);
        
    }
}
trianglePanttern(4);

// Number 2

/* SET number 
LOOP number
IF number multiple 3 Replace to FIZZ 
IF number multiple 5 Replace to BUZZ
IF number multiple 3& 5 Replace to FIZZBUZZ

*/ 

let number=


