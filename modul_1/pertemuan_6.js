// oop

let obj={
    name:"dafid",
    age:20,
    teach(){
        console.log(this.name+" student");
    }
}


obj.animes=["jjba","gintama"]
console.log(obj);

// destructuring Assigment

let [a,b]=[10,20]

console.log(a,b);

// spread operator 

const dataone=[1,2,3,4,5,]
const datatwo=[6,7,8,9,10]

console.log(dataone.concat(datatwo));

// THIS keyword 
obj.teach();