// Element Selectors

// document.getElementById  ELEMENT OR NULL
// document.getElementByClassName  HTML COLLECTION
// document.getElementsByTagName  HTML COLLECTION
// document.querySelector  FIRSTELEMENT OR NULL
// document.querySelectorAll  NODELIST

// const first = document.getElementById('first');
// console.log(first);
// first.style.fontFamily = 'Arial';
// first.style.fontSize = '20px';
// first.style.fontWeight = 'bold';
// first.style.marginBottom = '10px';
// first.textContent = `THIS my first javascript Course`

//const fruits = document.getElementsByClassName(`fruits`)

//fruits[0].style.backgroundColor = 'lightgreen'; 

// for(let fruit of fruits){
//     fruit.style.backgroundColor = 'lightgreen';
// }
//fruits.forEach(fruit => {fruit.style.backgroundColor = 'lightgreen';}) // this will not change the background color because 
//HTML collections does not have forEach method
//Array.from(fruits).forEach(fruit => {fruit.style.backgroundColor = 'lightgreen';})
const lis = document.getElementsByTagName('li');
//console.log(lis);
//Array.from(lis).forEach(li => {li.style.color = 'blue';})

// const fruit = document.querySelector('.fruits')

// fruit.style.backgroundColor = 'lightgreen';
// const vegetable = document.querySelector('li')
// vegetable.style.backgroundColor = 'lightgreen';
const fruits = document.querySelectorAll('.fruits');
const vegetables = document.querySelectorAll('li');

console.log(fruits);
vegetables.forEach(vegetable => vegetable.style.backgroundColor = 'blue');

fruits.forEach(fruit => fruit.style.backgroundColor = 'lightgreen');