/* 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output */

// Solution :- 
// Declaring input name variable
const input = "Saurabh";
// Using setTimeout function 
setTimeout(reverseString,2000);
function reverseString(){
    let arr = input.split("")
let reverse = arr.reverse();
let join = reverse.join("");
//In one line let reverse = input.split("").reverse().join("")
console.log(join);
}