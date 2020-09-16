var counter = 0;
var counterElem = document.getElementById('time');

function increase(){
    counter = counter + 1;
    counterElem.innerHTML = counter;
}

setInterval(increase, 1000);
