// let name = window.prompt("What is your name?");
// let age = Number(window.prompt("What is your age?"));

// function greetUser(name, age) {
//   console.log(`Hello ${age}, you are ${name} years old!`);
// }
// greetUser(age , name);

function checkEmail(email) {
    return email.includes('@') && email.includes('.');
}
 if(checkEmail(window.prompt("Enter your Email : "))){
    window.alert("Entered Email is a valid one");
 }else{
    window.alert("Entered Email is not a valid one");
 }
 