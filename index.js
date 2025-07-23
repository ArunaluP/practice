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

let user;

document.getElementById("sub").onclick = function() {
    user = document.getElementById("name").value;
    document.getElementById("myh1").textContent = `Hello ${user}`;
}