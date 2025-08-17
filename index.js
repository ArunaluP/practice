const display = document.getElementById("stopwatch")
const startbtn = document.getElementById("start")
const stopbtn = document.getElementById("stop")
const resetbtn = document.getElementById("reset")

let timer = null;
let runtime = 0;
let startTime = 0;
let isrunning = false;

startbtn.onclick =  function(){
    if(!isrunning){
        startTime = Date.now() - runtime;
        timer  = setInterval(updateTime,10)
        isrunning = true;
    }
}

stopbtn.onclick = function(){
    if(isrunning){
        clearInterval(timer);
        isrunning = false;
    }
}
resetbtn.onclick = function(){
    if(isrunning){
        clearInterval(timer);
        isrunning = false;
    }
    runtime = 0;
    display.textContent = "00:00:00:00";}

function updateTime(){
    runtime = Date.now() - startTime;
    const hours  = Math.floor(runtime/ (1000*60*60)).toString().padStart(2, '0');
    const minutes  = Math.floor(runtime/ (1000*60) % 60).toString().padStart(2, '0');
    const seconds  = Math.floor(runtime/ (1000) % 60).toString().padStart(2, '0');
    const miliseconds  = Math.floor(runtime/ (10) % 100).toString().padStart(2, '0');

   display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}


