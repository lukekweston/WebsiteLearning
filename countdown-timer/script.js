const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds');



const newYears = "1 Jan 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = Math.floor((newYearsDate - currentDate) /1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours /24);

    console.log(days, hours % 24, minutes % 60, seconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours % 24);
    minutesEl.innerHTML = formatTime(minutes % 60);
    secondsEl.innerHTML = formatTime(seconds % 60);

}

function formatTime(time){
    if(time < 10){
        return '0' + time;
    }
    return time;
}


//Initial call
countdown();

setInterval(countdown, 1000);