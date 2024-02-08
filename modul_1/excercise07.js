// // Number 1
// // function checkEqualObject(obj1,obj2){
// // const key1=Object.keys(obj1)
// // const key2=Object.keys(obj2)

// // if (key1.length !== key2.length) {
// //     return false;
// // }

// // for(const key of key1){
// //     if (obj1[key] !== obj2[key]) {
// //         return false
// //     }
// // }
// // return true;

// // }

// // let obj1={nama:"dafid",age:20,}
// // let obj2={nama:"dafid",age:20,}
// // let obj3={nama:"john",age:30,}

// // console.log(checkEqualObject(obj1,obj2));
// // console.log(checkEqualObject(obj1,obj3));

// Number 2

function intersectionObject(obj1,obj2){
let result={};

for(const key in obj1){
    if(obj2.hasOwnProperty(key))
    result[key]=obj1[key];
}
    return result;
}

let obj01={a:1,b:2,d:3}
let obj02={a:1,c:3,d:3}

console.log(intersectionObject(obj01,obj02));

// // Number 3

// function mergeArray(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     let res = [];

//     for (let i of arr) {
//         if (res.indexOf[i] === -1) {
//             res.push(i);
//         }
//     }
//     return res;
// }

// let ar1 = [
//     { name: "Student 1", email : "student1@mail.com" },
// { name: "Student 2", email: "student2 @mail.com" }
// ]

// let ar2 = [
//     { name: "Student 1", email : "student1@mail.com" },
// { name: "Student 3", email: "student3 @mail.com" }
// ]

// console.log(mergeArray(ar1,ar2));

// Number 4

function flipObject(arr){
    let result=[];

    for(let i of arr){
        let newObject={};
        for(let key in i){
           newObject[i[key]] = key
        }
        result.push(newObject);
    }
    return result;
}

console.log(flipObject([{name:"dafid",age:20}]));