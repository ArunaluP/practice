//window.alert(`You are Hacked`)
//console.log(`Hey leave the page you are now hacked version 1`)

//document.getElementById("firstOne").textContent= "hello world";
//document.getElementById("first").textContent = "This is my first paragraph in javascript course";

// let fullName = "Arunalu Prabhatha";
// let myGpa = 3.009;
// let isStudent = true;

// document.getElementById("num1").textContent = `My name is ${fullName}`;
// document.getElementById(`num2`).textContent = `My GPA is ${myGpa}`;
// document.getElementById(`num3`).textContent = `Is student: ${isStudent}`

// let username;
// username = prompt("Enter your name");

// console.log(`Hello ${username}, welcome to the JavaScript course!`);

// let user;

// document.getElementById("sub").onclick = function() {
//     user = document.getElementById("name").value;
//     document.getElementById("myh1").textContent = `Hello ${user}`;
// }
// let input = window.prompt("Enter your text");
// input = Number(input);
// input = String(input)
// input = Boolean(input);
// console.log(input , typeof input);

// const PI = 3.142857142857143;
// let radius;
// let circumference;
 
// document.getElementById("sub").onclick = function() {
//     radius = document.getElementById("radius").value;
//     circumference = 2 * PI * radius;
//     document.getElementById("myh3").textContent = `Circumference is ${circumference}`;
// }

// let number =0;
// const increment = document.getElementById("inc");
// const reset = document.getElementById("res");   
// const decrement = document.getElementById("dec")

// increment.onclick = function(){
//     number++
//     document.getElementById("state").textContent = number;
    
// }
// reset.onclick = function(){
//     number = 0;
//     document.getElementById("state").textContent = number;
// }
// decrement.onclick = function(){
//     number--
//     document.getElementById("state").textContent = number;
// }
//  let x= 3.5;
//  let y = 2;
//  let z = 1;

// let result;
// result = Math.round(x); // 4
// result = Math.floor(3.7);
// result = Math.ceil(3.3)
// result = Math.pow(5,3)
// result = Math.sqrt(25);
// result  =  Math.sin(90 * Math.PI / 180);
// result  =  Math.cos(60 * Math.PI / 180);
// result  =  Math.tan(45 * Math.PI / 180);
//  result = Math.max(x,y,z);
// result = Math.sign(0.5)
// result = Math.abs(-5.5);
// result = Math.log(8)
// result = Math.trunc(3.3)
// result = Math.max(3, 5, 7, 2, 8);
// result = Math.min(3, 5, 7, 2, 8);
// console.log(result);
// let min = 1;
// let max = 6;
// let value;
// document.getElementById("dice").onclick = function (){
//     value = Math.ceil(Math.random()*(max -min) + min);
//     document.getElementById("result").textContent = value;

// }
// const age = document.getElementById("myinput")
// const button = document.getElementById("mybutton")
// const result = document.getElementById("myp")

// button.onclick = function() {
//     let userAge = Number(age.value);
//     if (userAge < 18) {
//         result.textContent = "You are a minor.";
//     } else if (userAge >= 18 && userAge < 65) {
//         result.textContent = "You are an adult.";
//     } else {
//         result.textContent = "You are a senior citizen.";
//     }
// }

// const subbtn = document.getElementById("subscribebtn");
// const visabtn = document.getElementById("visabtn");
// const masterbtn = document.getElementById("masterbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const submitbtn = document.getElementById("submitbtn");
// const sub = document.getElementById("message-1");
// const pay = document.getElementById("message-2");

// submitbtn.onclick = function(){
//     if(subbtn.checked){
//         sub.textContent = "You are subscribed the Service!";
//     }else{
//         sub.textContent = "You are not subscribe our Service!";
//     }
//     if(visabtn.checked){
//         pay.textContent = "You have selected Visa Card as your payment method.";
//     }else if(masterbtn.checked){
//         pay.textContent = "You have selected Master Card as your payment method.";
//     }else if(paypalbtn.checked){
//         pay.textContent = "You have selected Paypal as your payment method.";
//     }else{
//         pay.textContent = "You have not selected any payment method.";
//     }

// }
// let marks = 15;
// let grade;

// switch(true){
//     case marks>=90 :
//         grade = "A";
//         break;
//     case marks < 90 && marks >= 80 :
//         grade = "B";
//         break;
//     case marks<80 && marks >=60 :
//         grade = "C";
//         break;
//     case marks<60 && marks >=35 :
//         grade = "S";
//         break;
//     default:
//         grade = "F";
//         break;
// }
// console.log(`Your grade is ${grade}`);
let name = "Arunalu Prabhatha";
// console.log(name.charAt(3)); // Length of the string
// console.log(name.indexOf("a"))
// console.log(name.lastIndexOf("a"));
// console.log(name.length);
// console.log(name.trim())
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.repeat(3))
// console.log(name.startsWith("A_0"))
// console.log(name.endsWith("tha"));
// console.log(name.includes("bha"))
// console.log(name.replaceAll("a","A"))
// console.log(name.padStart(20,"*"))
// console.log(name.padEnd(25,"*"))