const clock = document.querySelector('.time');

setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);