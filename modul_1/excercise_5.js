// Number 1

function sortBysize(arr){
    let minValue=arr[0];
    let maxValue=arr[0];
    let average=0;
    let total=0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue ) {
          minValue=arr[i]
        }
        if (arr[i]>maxValue) {
           maxValue=arr[i]
        }
        total+=arr[i];
    }

    average=total / arr.length

    return {min: minValue,max: maxValue,Average: average}
}

console.log(sortBysize([1,4,5,6,78,33,45,67]));

// Number 2

function arrayToString(arr){
    let result=" ";

    for (let i= 0;i < arr.length;i++) {
        if (i === arr.length -1) {
            result+= "and " + arr[i]
        }else{
        result=result + arr[i] + " ,";
        }
    }
    return result;
}

console.log(arrayToString(["banana","apple","cherry","date"]));

// Number 3

function mergeWord(str){
    let temp="";
    let result=[];
    for (let i = 0;  i < str.length; i++) {
        if (str[i] != " ") {
            temp+= str[i]
        }
        if (str[i] == " " || i === str.length -1 ) {
            result.push(temp)
            temp="";
        }
        
    }
    return result;
}

console.log(mergeWord("Hello World"));

// Number 4

function sumArray(arr1,arr2){
    if (arr1.length != arr2.length) {
        return "invalid array";
    }

    let result=[];

    for (let i = 0; i < arr1.length; i++) {
        let temp=arr1[i]+arr2[i];
        result.push(temp);
        
    }
    return result;
}

console.log(sumArray([1,2,3,4],[0,9,8,4]));

// Number 5

function checkArrayexist(arr,newElement){
    let flag=false

    for (let i = 0; i < arr.length; i++) {
     if (newElement == arr[i]) {
        flag = true;
        break;
     }
        
    }

    if (flag == 0) {
        arr.push(newElement)
    }

    return arr;
}

console.log(checkArrayexist([1,2,3,4],(9)));

// Number 6

