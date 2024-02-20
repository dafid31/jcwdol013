function fibonacciNumber(range){
let result=0;
let next=1;
let previous=0;

for(let i=1;i < range;i++){
     
    result = next + previous
    previous=next
    next=result
    console.log(result);
 

}
return result

}


console.log(fibonacciNumber(15));