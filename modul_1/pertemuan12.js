//  Callback

function foo(x,str,callback){
    console.log(x,str);
    callback();
}

function bar(){
    console.log("bar");
}

foo(12,"hello",bar)



// setTimeout(() => {
//     console.log("easy");
// }, 3000);
