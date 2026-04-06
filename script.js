let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let tick = document.getElementById("tickSound");
let digital = document.getElementById("digitaltime");

function displayTime(){
    let date = new Date();

    //Getting hours, minutes, seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // ✅ DIGITAL TIME (ADDED)
    let h = hh.toString().padStart(2, '0');
    let m = mm.toString().padStart(2, '0');
    let s = ss.toString().padStart(2, '0');

    digital.innerText = `${h}:${m}:${s}`;

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    // play tick sound every second
    tick.currentTime = 0;
    tick.volume = 0.2;
    tick.play();

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);