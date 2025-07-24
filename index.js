// -----String Slicing-----
// const name = "Arunalu Prabhatha"

// console.log(`first Name : ${name.slice(0,name.indexOf(" "))} Last Name : ${name.slice(name.indexOf(" ") + 1)}`);

// -----Method Chaining-----

let name = window.prompt("Enter your name: ")

let firstCharacter = name.charAt(0)
let capitalfirst = firstCharacter.toUpperCase()
let restOfName = name.slice(1)
let restname = restOfName.toLowerCase()

let finalName = capitalfirst + restname

console.log(`Your name is: ${finalName}`);