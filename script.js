function counter(){
    var counter = document.getElementById('time');
    var c = new Date().getSeconds();

    counter.innerHTML = c;
}

var interval = setInterval(counter, 1000)
