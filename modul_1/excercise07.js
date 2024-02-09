// // Number 1
// function checkEqualObject(obj1,obj2){
// const key1=Object.keys(obj1)
// const key2=Object.keys(obj2)

// if (key1.length !== key2.length) {
//     return false;
// }

// for(const key of key1){
//     if (obj1[key] !== obj2[key]) {
//         return false
//     }
// }
// return true;

// }

// let obj1={nama:"dafid",age:20,}
// let obj2={nama:"dafid",age:20,}
// let obj3={nama:"john",age:30,}

// console.log(checkEqualObject(obj1,obj2));
// console.log(checkEqualObject(obj1,obj3));

// // Number 2

// function intersectionObject(obj1,obj2){
// let result={};

// for(const key in obj1){
//     if(obj2.hasOwnProperty(key))
//     result[key]=obj1[key];
// }
//     return result;
// }

// let obj01={a:1,b:2,d:3}
// let obj02={a:1,c:3,d:3}

// console.log(intersectionObject(obj01,obj02));

// // Number 3

// function mergeArray(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     let res = [];

//     for (let i=0;i < arr.length;i++) {
        
//        const newStudent=arr[i];

//        const isEmailUniq= !res.some(student => student.email === newStudent.email );
        
//         if(isEmailUniq) {
//             res.push(newStudent);
//         }
//     }

//         return res;
//     }
    


// let ar1 = [
//     { name: "Student 1", email : 'student1@mail.com' },
// { name: "Student 2", email: 'student2 @mail.com' },
// ];

// let ar2 = [
//     { name: "Student 1", email : 'student1@mail.com' },
// { name: "Student 3", email: 'student3 @mail.com' },
// ];

// console.log(mergeArray(ar1,ar2));

// // Number 4

// function flipObject(arr){
//     let result=[];

//     for(let i of arr){
//         let newObject={};
//         for(let key in i){
//            newObject[i[key]] = key
//         }
//         result.push(newObject);
//     }
//     return result;
// }

// console.log(flipObject([{name:"dafid",age:20}]));

// // Number 5

// function factorialNumber(num){
// let res=1;
// let recordNum="";

// for(let i=num;i>=1;i--){
//  recordNum += i !== 1 ? `${i} X ` : `${i}`;
//  res *=i;
// }
//  console.log(`${num}! = ${recordNum} = ${res}`);

// }

// factorialNumber(5);

// Number 6

class ShootingGame{
    constructor(player1,player2){
        this.player1=player1;
        this.player2=player2;
    }

    getRandomItem(){
        let randomNum=Math.round(Math.random()*10);
        let result={};

        randomNum % 2 ==0
        ? (result = {health :10,power:0})
        : (result = {health :0,power:10});
        return result

    }

    start(){
        console.log("\n ----------------------------\n");
    //    Show Status
    this.player1.showStatus(),this.player2.showStatus();
    console.log    ("\n----------------------------\n");
    // Get Random Item
    let randomP1=this.getRandomItem();
    this.player1.health+= randomP1.health;
    this.player1.power+=randomP1.power;
    console.log(
        `ADD ITEM ${this.player1.name} =>health ++${randomP1.health} Power ++${randomP1.power}`
    );
    let randomP2=this.getRandomItem();
    this.player2.health+= randomP2.health;
    this.player2.power+=randomP2.power;
    console.log(
        `ADD ITEM ${this.player2.name} =>health ++${randomP2.health} Power ++${randomP2.power}`
    );
    console.log    ("\n-----------------------------\n");
    // SHOOT Player

    this.player2.health=
        this.player2.health - this.player1.hit(this.player1.power)
    this.player1.health=
        this.player1.health - this.player2.hit(this.player2.power)

        // Show Status

        this.player1.showStatus(),this.player2.showStatus();
        if (this.player1.health <= 0 && this.player2.health<=0) {
            this.player1.health > this.player2.health
            ? console.log(
                `\n[[[[[[]]]]]]\n* PLAYER 1 ${this.player1.name} WIN *\n[[[[[[]]]]]]\n`
            )
            :console.log(
                `\n[[[[[[]]]]]]\n* PLAYER 2 ${this.player2.name} WIN *\n[[[[[[]]]]]]\n`
            );
        }else if(this.player1.health <=0){
            console.log(`\n[[[[[[]]]]]]\n* PLAYER 2 ${this.player2.name} WIN *\n[[[[[[]]]]]]\n`);
            
        }else if (this.player2.health <=0){
            console.log(`\n[[[[[[]]]]]]\n* PLAYER 1 ${this.player2.name} WIN *\n[[[[[[]]]]]]\n`);
        }else{
            this.start();
        }



    }


}

class Player{
    constructor(name,power,health){
        this.name=name;
        this.power=10;
        this.health=100;

    }

    useItem(item){
        return console.log(`use ${item.getRandomItem()}`);
    }

    hit(power){
        console.log(`hit ${this.name}=> power => ${power}`);
        return power
    }

    showStatus(){
        return console.log(
            `Player : ${this.name}(health=> ${this.health}, power=> ${this.power})`
        );
    }
}

let dafid = new Player("dafid")
let putra = new Player("putra")

let play = new ShootingGame(dafid,putra);
play.start();