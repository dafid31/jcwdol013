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
IF number multiple 3 * 5 Replace to FIZZBUZZ

*/ 

let LoopNumber=(number)=>{

    let recordLoop=[];

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 & i % 5 ===0 ) {
        recordLoop.push("FizzBuzz")
        }else if (i % 5 ===0){
            recordLoop.push("Buzz");
        }else if(i % 3 === 0){
        recordLoop.push("Fizz");
        }else{
            recordLoop.push(i.toString());
        }
    }
    return recordLoop;
    }

let recordLoop=LoopNumber(6);
let recordLoop2=LoopNumber(30);

console.log(recordLoop.join(' '));
console.log(recordLoop2.join(' '));

// Number 3


let BMI =(height,weight)=>{

    let res= weight / height;

    if (res < 18.5) {
        console.log("less weight");
    }else if (res >18.5 & res < 24.9) {
        console.log("ideal");
    }else if (res > 25.0 & res < 29.9) {
        console.log("overweight");
    }else if (res > 30.0 & res < 39.9) {
        console.log("very overweight");
    }else{
        console.log("obesity");
    }

    return res;
    
}

BMI(65,170);

// Number 4

function removeOddNumber(arr){
    let result=[];
for (let i=0; i < arr.length-1; i++) {
     if (arr[i] % 2 === 0 ) {
        result.push(arr[i])
     }
}
return result;
}
console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]));

// Number 5
function StringToArray(word){
    return word.trim().split(" ");
        
    }
console.log(StringToArray("dafid pratama putra"));
