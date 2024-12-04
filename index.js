// const input = prompt("Enter number:");
// if (input % 5 === 0 && input % 3 === 0) {
//   console.log("fizzbuzz");
// } else if (input % 3 === 0) {
//   console.log("fizz");
// } else if (input % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log("nothing");
// }
// //ex2
// const a1 = -5;
// const a2 = -2;
// const a3 = -6;
// const a4 = 0;
// const a5 = -1;

// if (a1 > a2 && a1 > a3 && a1 > a4 && a1 > a5) {
//   console.log(a1);
// } else if (a2 > a1 && a2 > a3 && a2 > a4 && a2 > a5) {
//   console.log(a2);
// } else if (a3 > a1 && a3 > a2 && a3 > a4 && a3 > a5) {
//   console.log(a3);
// } else if (a4 > a1 && a4 > a2 && a4 > a3 && a4 > a5) {
//   console.log(a4);
// } else if (a5 > a2 && a5 > a3 && a5 > a4 && a5 > a1) {
//   console.log(a5);
// }

// //ex3
// const num1 = 5;
// const num2 = 2;
// if (typeof num1 !== "number" || typeof num2 !== "number") {
//   console.log("Invalid inputs");
// } else if (num1 > num2) {
//   console.log(num1,num2);
// } else {
//   console.log(num2,num1);
// }
// //ex4
// const buz1 = -4
// const buz2 = 1
// const buz3 = 2
// if ((buz1+buz2+buz3)<0) {
//   console.log("-")
// } else {
//   console.log("+")
// }
// //ex5
// const x = 5
// const y = 5
// if (x > y) {
//   console.log("true")
// } else if (x === y) {
//   console.log(false)
// } else if (x < y) {
//   console.log(false2)
// }
// ex6
// const dunn = prompt("Enter dun:");
// const A = 90
// const B = 80
// const C = 70
// const D = 60
// const F = 50
// if (dunn < 100 && dunn > 90) {
//   console.log("A dun")
// } else if (dunn < 90 && dunn > 80) {
//   console.log("B dun")
// } else if (dunn < 80 && dunn > 70) {
//   console.log("C dun")
// } else if (dunn < 70 && dunn > 60) {
//   console.log("D dun")
// } else if (dunn < 60 && dunn > 50) {
//   console.log("F dun")
// } else {
//   console.log("f")
// }

//ex7
// const true1 = true;
// if (true1 == true) {
//   console.log("Crew Ready");
// } else if (true1 !== true) {
//   console.log("Crew not Ready");
// } else {
//   console.log("false");
// }

// Exercise 8 j

// const mendleh = prompt("Please insert your role?");
// if (mendleh === 'Employee') {
//   console.log("Hello");
// } else if (mendleh === "Director") {
//   console.log("Greethings");
// } else if (mendleh.length == 0) {
//   console.log("Please provide role");
// } else {
//   console.log("Hi");
// }

// Exercise 8 j

// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.

// const hool = prompt("hool");
// if (hool > 5000 && hool < 30000) {
//   console.log(hool * 1.15);
// } else {
//   console.log(hool * 1.2);
// }

// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character

// const state = prompt("length");
// if (state.length > 10) {
//   console.log("the string  has more than 10 characters");
// } else if (state.length > 5) {
//   console.log("the string  has more than 5 characters");
// } else if (state.length > 1) {
//   console.log("the string has nothing");
// } else if ((state.length = 1)) {
//   console.log("the string has 1 character");
// }

// 1

//Write a JavaScript program that checks if a given number is positive, negative, or zero.
// Sample Input: let number = -5;
// Sample Output: "-5 is negative"

// const checking = prompt("checking");
// if (checking > 0) {
//   console.log(checking + " is possitive");
// } else if (checking < 0) {
//   console.log(checking +" is negative");
// } else if ((checking = 0)) {
//   console.log("zero");
// }

// 2

// Write a JavaScript program to check if a given temperature in Celsius is
//  considered freezing (below 0), normal (0-30), or hot (above 30).
// Sample Input: let temperature = 15;
// Sample Output: "15°C is normal"

// const temp = prompt("temprature")
// if (temp < 0) {
//   console.log( temp, "°C freezing" )
// } else if (temp > 0 && temp <30 ) {
//   console.log(temp, "°C is normal")
// } else if (temp > 30 ) {
//   console.log(temp, "°C is hot")
// }

// 3

// Write a JavaScript program to determine whether a given character is a vowel or a consonant.
// Sample Input: let char = 'a';
// Sample Output: "a is a vowel"
// =  ====> utga onooh
//  == opartors
//  === operator ghdee data type


// const useg = prompt("usegnuud");
// if (useg == 'a' || useg == "e" || useg == "y" || useg == "u" || useg == "o") {
//   console.log("vowel");
// } else if (useg == "q" || useg == "w" || useg == "r" || useg == "t") {
//   console.log("consonant");
// }


