function majorityArr(arr) {
    let array = arr.sort();
    let qty = 0;
    let numMajority = { num: 0, qty: 0 };
    array.forEach((e, i) => {
      if (e == arr[i + 1] || e == arr[-1]) {
        qty = qty + 1;
      } else {
        qty = 0;
      }
      if (qty > numMajority.qty) {
        numMajority.num = e;
        numMajority.qty = qty;
      }
    });
    console.log(numMajority.num);
  }
  
  majorityArr([2, 2, 1, 1, 1, 2, 2]);
  // majorityArr([3, 2, 3]);

  function RomawiNum(num) {
    let numRomawi = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let arr = num.split("");
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
      if (numRomawi[arr[index]] < numRomawi[arr[index + 1]]) {
        result += numRomawi[arr[index + 1]] - numRomawi[arr[index]];
        index += 1;
      } else {
        result += numRomawi[arr[index]];
      }
    }
    console.log(result);
  }
  
  RomawiNum("LVIII");

  function pascalTriangle(num) {
    let res = [];
    let subArr = [];
    for (let index = 1; index <= num; index++) {
      subArr = [];
      for (let j = 1; j <= index; j++) {
        if (j == 1 || j == index) {
          subArr.push(1);
        } else {
          subArr.push(res[index - 2][j - 1] + res[index - 2][j - 2]);
        }
      }
      res.push(subArr);
    }
    return console.log(res);
  }
  
  pascalTriangle(5);