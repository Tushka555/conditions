const input = prompt("Enter number:");
if (input % 5 === 0 && input % 3 === 0) {
  console.log("fizzbuzz");
} else if (input % 3 === 0) {
  console.log("fizz");
} else if (input % 5 === 0) {
  console.log("buzz");
} else {
  console.log("nothing");
}
//ex2
const a1 = -5;
const a2 = -2;
const a3 = -6;
const a4 = 0;
const a5 = -1;

if (a1 > a2 && a1 > a3 && a1 > a4 && a1 > a5) {
  console.log(a1);
} else if (a2 > a1 && a2 > a3 && a2 > a4 && a2 > a5) {
  console.log(a2);
} else if (a3 > a1 && a3 > a2 && a3 > a4 && a3 > a5) {
  console.log(a3);
} else if (a4 > a1 && a4 > a2 && a4 > a3 && a4 > a5) {
  console.log(a4);
} else if (a5 > a2 && a5 > a3 && a5 > a4 && a5 > a1) {
  console.log(a5);
}

//ex3
const num1 = 5;
const num2 = 2;
if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Invalid inputs");
} else if (num1 > num2) {
  console.log(num1,num2);
} else {
  console.log(num2,num1);
}
//ex4 
const buz1 = -4
const buz2 = 1
const buz3 = 2
if ((buz1+buz2+buz3)<0) {
  console.log("-")
} else {
  console.log("+")
}
//ex5 
const abb = 1
const abbbbb = 33
const avvvv = 27