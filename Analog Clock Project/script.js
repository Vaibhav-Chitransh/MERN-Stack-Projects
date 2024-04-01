setInterval(() => {
    let date = new Date();
    let hTime = date.getHours();
    let mTime = date.getMinutes();
    let sTime = date.getSeconds();

    let hRotation = 30*hTime + (mTime/2) + sTime/120;
    let mRotation = 6*mTime + (sTime/10);
    let sRotation = 6*sTime;

    let hour = document.querySelector('#hour');
    let minute = document.querySelector('#minute');
    let second = document.querySelector('#second');

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);