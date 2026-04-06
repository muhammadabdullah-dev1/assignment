// let name = "Abdullah"
// console.log(name);

// 2
// a = 2;
// b = 5;
// console.log(a + b);


// -------------------
// 3
// -------------------

// let a = prompt();
// if (a % 2 === 0) {
//     console.log("Even Number");

// } else {
//     console.log("odd Number");

// }


// -------------------
// 4
// -------------------

// function squareOfNumber(a) {
//     return a ** 2;
// }
// console.log(squareOfNumber(prompt()));
// function addNumber(num1, num2) {
//     return num1 + num2
// } console.log(addNumber(7, 8));


// ===============================
// 5
// ===============================
// let celsius = prompt()
// let Fahrenheit = (celsius * 1.8) + 32
// console.log(Fahrenheit);

// ===============================
// 6
// ===============================
// const Number = prompt();

// if (Number > 0) {
//     console.log("positive Number");

// } else if (Number < 0) {
//     console.log("negative Number");

// } else {
//     console.log("zero");

// }


// ===============================
// 7
// ===============================


// let a = 9;
// let b = 10;
// let d = b;
// d = b;
// a = b

// console.log(a, b);


//  ===============================
// 8
// ===============================

// for (let i = 1; i < 11; i++) {
//     console.log(i);


// }

//  ===============================
// 9
// ===============================



// const a = prompt("A:")
// const b = prompt("B:")
// const c = prompt("C:")
// if (a > b && a > c) {
//     console.log("A is greater");

// } else if (b > a && b > c) {
//     console.log("B is greater");

// } else if (c > a && c > b) {
//     console.log("c is greater");

// }


//  ===============================
// 10
// ===============================

// const a = "67"
// const b = a.split("").reverse().join("")


// console.log(b);





// const c = "890"
// const b = c.split("").reverse().join()
// console.log(b);


//  ===============================
// 11
// ===============================
// const a = ["a", "e", "i", "o", "u"];
// const b = a.join("")
// for (let b = 0; b < a.length; b++) {

//     console.log(b);
// }
let str = "hello";
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i]; // take one letter

    if (vowels.includes(char)) {
        count++; // increase count
    }
}

console.log(count); // 2

