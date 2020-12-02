const newyrs = '1 jan 2021'
const dayel = document.getElementById('days')
const hourel = document.getElementById('hour')
const minuel = document.getElementById('mins')
const secel = document.getElementById('sec')
const until = document.getElementById('until')

const newyeardate = new Date(newyrs);
until.innerHTML = `Time Until ${newyeardate}`;
function countdown(){
    const newyeardate = new Date(newyrs);
    const currentdate = new Date();
    const second = (newyeardate-currentdate) / 1000;
    const days = Math.floor(second / 3600 / 24);
    const hours = Math.floor(second / 3600) % 24;
    const min = Math.floor(second/60) % 60;
    const sec = Math.floor(second % 60);
    dayel.innerHTML = formattime(days);
    hourel.innerHTML = formattime(hours);
    minuel.innerHTML = formattime(min);
    secel.innerHTML = formattime(sec);
}

function formattime(time){
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown,1000)