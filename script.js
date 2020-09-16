function counter(){
    var counter = 0;
    var counter = document.getElementById('time');
    for (let i = 0; i < 101; i++) {
        counter = i;
        setInterval(+1);
    }
}
var c = new Date().getSeconds();

counter.innerHTML = c;
var interval = setInterval(counter, 1000)