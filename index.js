// setTimeout(function(){
//     console.log("I am the hero")
// },3000)

// const sum = (a,b) =>{ a=a+b;return a+b}


// console.log(sum(1,2))

const numbers = [1,2,3,4,5]

const square = numbers.map((element) => Math.pow(element,2))
const cube = numbers.map((element) => Math.pow(element,3))
const isEven = numbers.filter((element) => element%2==0)
const isOdd = numbers.filter((element) => element%2!=0)
const sum = numbers.reduce((a,b) => a+b)

console.log(sum)