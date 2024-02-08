// number 1
const data=[
{
    name:'dafid pratama',
    email: 'dafid@gmail.com',
    age :20,
    score:89,
},
{
    name:"agus",
    email: "agus@123.com",
    age :30,
    score:87,
},
{
    name:"lilis",
    email: "lilis67@gmail.com",
    age :22,
    score:78,
}


];




function calculateStudent(){
    let result ={
        score :{
            highest:data[0].score,
            lowest:data[0].score,
            average: 0,
        },
    
        age:{
            highest:data[0].age,
            lowest:data[0].age,
            average:0,
        },
    };

    let totalScore=0;
    let totalAge=0;

    for (let i = 1;  i < data.length; i++) {   /*  terbesar  */
        if (data[i]>result.score.highest) {
            result.score.highest=data[i].score
        }

        if (data[i]<result.score.lowest) {
            result.score.lowest=data[i].score
        }
        if (data[i]<result.age.highest) {
            result.age.highest=data[i].age
        }
        if (data[i]<result.age.lowest) {
            result.age.lowest=data[i].age
        }
        totalScore +=data[i].score
        totalAge +=data[i].age
        
    }
    result.score.average =Math.round(totalScore / data.length)
    result.age.average =Math.round(totalAge / data.length)
    return result;
}

console.log(calculateStudent(data));

// Number 2

class Product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
}

class Transaction{
    constructor(){
        this.total= 0;
        this.products=[];
    }

    addToCart(productOBJ,qty){
        let dataTransaction={
            product: productOBJ,
            qty: qty,
            total:productOBJ.price * qty,
        };
        this.products.push(dataTransaction); //insert to cart

    }


    showTotal(){
        for (let i = 0; i < this.products.length; i++) {
            
            this.total += this.products[i].total;
        }
        return this.total;
    }

    checkout(){

        let readableTransaction=this.products.map((item)=>{
            return{
                total:item.total,
                product:item.product.name,
                qty:item.qty

            };
        });

        return{
            cart:readableTransaction,
            total:this.total,
        };
    }
}

let msiRTX360=new Product("msiRTX 360",90000)
let iphone15=new Product("iphone 15",150000)

let transaction001 = new Transaction()

transaction001.addToCart(msiRTX360,3)
transaction001.addToCart(iphone15,2)

 console.log(transaction001.products);
console.log(transaction001.showTotal());
 console.log(transaction001.checkout());
