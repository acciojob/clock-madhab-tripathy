//your JS code here. If required.
const time = document.getElementById("timer")
const d = new Date();
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function checkAmPm(hour){
    if(hour >= 0 && hour < 12){
        return "AM"
    }
    return "PM"
}
function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    // add a zero in front of numbers<10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    time.innerHTML = `${d.toLocaleDateString()}, ${hour}:${minutes}:${seconds} ${checkAmPm(hour)}`;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();