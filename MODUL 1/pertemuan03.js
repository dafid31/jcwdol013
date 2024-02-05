// Number 1

let number = 9;
let number2 = 0;

for (let i = 1; i <= 10; i++) {
    number2 = i;
    console.log(`${number} X ${number2} = ${number * i}`);

}

// Number 2

let word = "kasur rusak";
let letters = word.split("");
let reversedLetters = letters.reverse();
let reveredWord = reversedLetters.join("");

if (word.toLowerCase() == reveredWord.toLowerCase()) {
    console.log("this is a polindrome");

} else {
    console.log("this not a polindrome");
}

// Number 3

let numCm = 1000; //
let numKm = 100000;
let num = 100000;
let satuan = "cm";

if (satuan == "cm") {
    num = num / numKm;

}
if (satuan == "km") {
    num = num * numCm;

}
console.log(num, "km");

// Number 4

const rupiah = (number3) => {
    return Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number3)
}
console.log(rupiah(1000000000000));

// Number 5


let seacrhString = (string, seacrhstr) => {
    var index = string.indexOf(seacrhstr);
    if (index === -1) {
        return string;
    }
    return string.slice(0, index) + string.slice(index + seacrhstr.length);

}
console.log(seacrhString("hello world", 'ell'));

// number 6

let CapitalizedWords = (sentences) => {
    const wordArray = sentences.split(" ");

    const capitalizedWordArray = wordArray.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const capitalizedString = capitalizedWordArray.join(' ');

    return capitalizedString
}

console.log(CapitalizedWords('hello world'));


// Number 7
let reversestr = (str) => {
    return str.split("").reverse().join("")
}
console.log(reversestr("kasur rusak"));


// Number 8
let str = "QUiCk bRown fOx"
let result2 = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
        result2 += str[i].toUpperCase();
    } else if (str[i] == str[i].toUpperCase()) {
        result2 += str[i].toLowerCase();
    } else {
        result2 += str[i];
    }

}
console.log(result2);

//  Number 9

let findLargest = (N1, N2) => {
    if (N1 > N2) {
        console.log(`${N1} is largest number`);
    } else {
        console.log(`${N2} is largest number`);
    }
}

findLargest(30, 21);

// Number 10

const sortNumbers = (nu1, nu2, nu3) => {
    if (nu1 > nu2 && nu1 > nu3) {
        if (nu2 > nu3) {
            console.log(`${nu3} + ${nu2} + ${nu1}`);
        } else {
            console.log(`${nu2} + ${nu3} + ${nu1}`);

        }
    } else if (nu2 > nu1 && nu2 > nu3) {
        if (nu1 > nu3) {
            console.log(`${nu3} + ${nu1} + ${nu2}`);
        } else {
            console.log(`${nu1} + ${nu3} + ${nu2}`);

        }

    } else if (nu3 > nu1 && nu3 > nu2) {
        if (nu1 > nu2) {
            console.log(`${nu2} + ${nu1} + ${nu3}`);
        } else {
            console.log(`${nu1} + ${nu2} + ${nu3}`);
        }

    }
}
sortNumbers(11, 22, 89);

// number 11

const checkDataType = (input) => {
    if (typeof input === 'string') {
        console.log(1);
    } else if (typeof input === 'number') {
        console.log(2);
    } else {
        console.log(3);
    }
}

checkDataType("asu");

// number 12

let sentences = "An apple a day keeps the doctor away";
let newSenteces = sentences.replace(/a|A/g, "*");

console.log(newSenteces);