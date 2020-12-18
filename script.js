// Elements
const dy = document.querySelector(".days .box-time");
const hr = document.querySelector(".hours .box-time");
const min = document.querySelector(".minute .box-time");
const sec = document.querySelector(".seconds .box-time");
const spinner = document.querySelector(".dot-spinner");



// Date Functionality 
const up10Dayes = 1609183660093;

let degrees = 0;

setInterval(() =>
{
    const convertedTime = (up10Dayes - new Date().getTime())
    const days = new Date(convertedTime).getDate();
    const hours = new Date(convertedTime).getHours();
    const minutes = new Date(convertedTime).getMinutes();
    const seconds = new Date(convertedTime).getSeconds();
    dy.innerHTML = days;
    hr.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    spinner.style.transform = `translateX(-500px) rotateZ(${-degrees}deg)`;
    degrees += 2;
}, 1000)