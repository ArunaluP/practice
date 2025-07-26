// let nembers = [1,2,3,4,5]

// function double(element , index , array) {
//     array[index] = element * 2;
// }

// nembers.forEach(double)

// function display(element){
//     console.log(element)
// }
// nembers.forEach(display)

function sum(callback,a,b){
    let result = a+b;
    callback(result)
}
function display(value){
    console.log(value)
}
sum(display,5,4)
function hello(callback){
    console.log("hello")
    callback()
}
function bye(){
    console.log("bye")
}
hello(bye)