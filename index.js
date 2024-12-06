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

//4

// const tseng = prompt("unelgee")
// if (tseng > 90) {
//   console.log("A")
// } else if (tseng > 80 && tseng < 90) {
//   console.log("B")
// } else if (tseng > 70 && tseng < 80) {
//   console.log("C")
// } else if (tseng > 60 && tseng < 70) {
//   console.log("D")
// } else if (tseng < 60) {
//   console.log("F")
// }

// 5

// Write a JavaScript program to determine if a person is an adult, teenager, or child based on their age.

// const nas = prompt("nas")
// if (nas < 13) {
//   console.log("child")
// } else if (nas > 13 && nas < 20) {
//   console.log("teenager")
// } else if (nas > 20) {
//   console.log("adult and above")
// }

// 6

// Write a JavaScript program to check if a given number is divisible by 5 or 7.

// const huvaah = prompt("5,7");
// if (huvaah % 7 == 0 && huvaah % 5 == 0) {
//   console.log(huvaah, "is divisible by both 5 and 7");
// } else if (huvaah % 5 == 0) {
//   console.log(huvaah, "is divisible by 5");
// } else if (huvaah % 7 == 0) {
//   console.log(huvaah, "is divisible by 7");
// }

//7
//  the given time is in the morning (0-11), afternoon (12-17), or evening (18-23).

// const times = prompt("times")
// if (times>0 && times<12) {
//   console.log("the morning")
// } else if (times>12 && times<18) {
//   console.log("afternoon")
// } else if (times>18 && times<24) {
//   console.log("night")
// }

//8   ????
// const dunn22 = prompt("didji")
// if (dunn22>=10) {
//     console.log("double digit")
// } else if (dunn22<10) {
//     console.log("one digit")
// }

//9

// const duruv = prompt("4");
// duruv % 4 == 0, 1,2, 3
// if (duruv % 4 == 0) {
//   console.log(duruv, "is a multiple of 4");
// } else if (duruv % 4 !== 0) {
//     console.log(duruv,"is not a multiple of 4")
// }

// 10

// Write a JavaScript program to check if a given character is uppercase or lowercase.
// const G = prompt("G")
// if (G.toUpperCase() == G) {
//     console.log(G, "is upperCase")
// } else if (G.toLowerCase() == G) {
//     console.log(G, "is lowerCase")
// }

// 11

// Write a JavaScript program to determine if a given day number corresponds to a weekday or a weekend (1 = Monday, ..., 7 = Sunday).
// const weeknd = prompt("weekend")
// if (weeknd == 1) {
//     console.log("Monday")
// } else if (weeknd == 2) {
//     console.log("Tuesday")
// } else if (weeknd == 3) {
//     console.log("Wednesday")
// } else if (weeknd == 4) {
//     console.log("Thursday")
// } else if (weeknd == 5) {
//     console.log("Friday")
// } else if (weeknd == 6) {
//     console.log("Saturday")
// } else if (weeknd == 7) {
//     console.log("Sunday")
// }

//1
// for (let i = 1; i <= 15; i++) {
//     if (i%2 == 0) {
//         console.log(`${i} even`)
//     } else {
//         console.log(`${i} odd`)
//     }
// }
//2
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 == 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 == 0) {
//     console.log(`${i} Buzz`);
//   } else {
//     console.log(i);
//   }
// }
//3
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// let niilber = 0;
// let niilber1 = 0;
// for (i = 0; i < arr_1.length; i++) {
//   niilber += arr_1[i];
//   niilber1 += arr_2[i];
// }
// console.log("niilber", niilber);
// console.log("niilber1", niilber1);
// console.log(niilber + niilber1);

// Exercise 4

// Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
//  = ===> utga onooh variable
//  == , === +++++> if nuhtsul
// for (let i = 1; i <= 22; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "huvaan");
//   }
// }
// Exercise 5

// let str1 = "javascript";
// for (i = 0; i <= str1.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     console.log("Z");
//   } else {
//     console.log(str1.charAt(i));
//   }
// }

// Exercise 6

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// let str2 = "don’t know why";
// Example output:
// “yes”
// let str2 = "don’t know why";
// for (i = 0; i <= str2.length; i++) {
//   console.log(str2[i]);
//   if (str2[i]=="y") {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// Exercise 7

// Given a number n Calculate the factorial of the number

// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// let n2 = 4
// x=1
// for (let i=1 ; i<=n2; i++) {
//     console.log(x*=i)
// }
// console.log(x)

//  Exercise 8

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// for (i=0 ; i<=10; i++) {
//     console.log(i*9, "result")
// }

// Exercise 9

// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.
// for (let i = 60; i <= 100; i++) {
//   if (i >= 60 && i < 70) {
//     console.log(`${i} D`);
//   } else if (i >= 70 && i < 80) {
//     console.log(`${i} C`);
//   } else if (i >= 80 && i < 90) {
//     console.log(`${i} B`);
//   } else if (i >= 90 && i <= 100) {
//     console.log(`${i} A`);
//   }
// }

// Exercise 10

//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.

// Example Output:
// 1 2 3 4 5 6 7 8 9 10

// for (let i = 1; i <=10 ; i++) {
//     console.log(i)
// }

// Exercise 11

// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.

// Example Output:
// The sum is 210

// let Sum = 0
// for (i=0; i<=20; i++) {
//     Sum += i
// }
// console.log(Sum)

// Exercise 12

// Count Vowels in a String Write a loop to count how many vowels are in a given string.

// let str = "hello world";
// Example Output:
// Number of vowels: 3
// const vowels = "aeious"
// let str = "hello world";
// let vowels = ["a", "o", "e"];
// for (let i = 0; i <= str.length; i++) {
//   if (vowels.includes(str[i])) {
//     console.log(typeof[i], "vowels");
//   }
// }

// Exercise 13

// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.

// Example Output:
// 1 3 5 7 9 11 13 15

// for (i = 1; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   } else {
//     console.log()
//   }
// }

// Exercise 14

// Check if a Number is Prime Write a loop to check if a number n is prime.

// let n = 7;
// Example Output:
// 7 is a prime number
// let n = 7;
// let isPrime = true;
// for (i = 2; i <= n - 1; i++) {
//   if (n % i == 0) {
//     isPrime = false
//   }
// }
// console.log("is Prime number:", isPrime, n)
// // Exercise 15

// Reverse a String Write a loop to reverse the characters in a string.

// let str = "javascript";
// Example Output:
// tpircsavaj
// let str = "javascript";
// for (i=(str.length)-1; i>=0; i--){
//   console.log(str.charAt(i))
// }

// Calculate Power of a Number Write a loop to calculate base^exponent. originalStr.charAt(i)

// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32
// let base = 2;
// let exponent = 5;
// let num1 = 1;
// for (let i = 0; i < exponent; i++) {
//   num1 = num1 * base;
// }
// console.log(num1);

// Exercise 17

// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.

// Example Output:
// 5 10 15 20 25 30 35 40 45 50
let num1 = 5
let num2 = 1
for (i=0; i<=50; i++){
  if (i % 5 === 0){
    console.log(i);
  }
}


// Exercise 18

// Find the Largest Number in an Array Write a loop to find the largest number in an array.

// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98

// Exercise 19

// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.

// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4

// Exercise 20

// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.

// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8

// Exercise 21

// Find All Divisors Write a loop to find all divisors of a number n.

// let n = 28;
// Example Output:
// 1 2 4 7 14 28

// Exercise 22

// Check Palindrome Write a loop to check if a string is a palindrome.

// let str = "radar";
// Example Output:
// radar is a palindrome

// Exercise 23

// Count Words in a Sentence Write a loop to count the number of words in a sentence.

// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

// Exercise 24

// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.

// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4

// Exercise 25

// Filter Positive Numbers Write a loop to filter out positive numbers from an array.

// let arr = [-3, 5, -2, 0, 9, -8];
// Example Output:
// [5, 9]

// Exercise 26

// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****

// Exercise 27

// Sum of Digits Write a loop to calculate the sum of the digits of a number.

// let num = 12345;
// Example Output:
// Sum of digits: 15

// Exercise 28

// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.

// let arr = [1, 2, 3, 2, 1, 4];
// Example Output:
// [1, 2, 3, 4]

// Exercise 29

// Find Second Largest Number Write a loop to find the second largest number in an array.

// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9

// Exercise 30

// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.

// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]

// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *
