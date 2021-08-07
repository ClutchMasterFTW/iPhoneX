//Global Variables
var power = false;
var started = false;
var ringer = false;
var volume = 5;
var battery = 100;
var wallpaper = "default.jpg";
var mode = "light";
var setupComplete = false;

var wallpapers = [
    {
        name: "default",
        link: "default.jpg",
        mode:  "light"
    }
];

function powerOn() {
    if(power == false) {
        //Turn On
        power = true;
        document.getElementById("logo").style.visibility = "visible";
        var startupTimeout = setTimeout(function() {
            document.getElementById("logo").style.visibility = "hidden";
            started = true;
            if(setupComplete == false) {
                setup();
            } else if(setupComplete == true) {
                initiateLockScreen("on");
            }
        }, 5000);
    } else if(power == true) {
        //Turn Off
        power = false;
        clearTimeout(startupTimeout);
        document.getElementById("logo").style.visibility = "hidden";
        started = false;
        initiateLockScreen("off");
    }
}

function initiateLockScreen(state) {
    if(state == "on" && started == true) {
        document.getElementById("wallpaper").style.visibility = "visible";
        document.getElementById("main-time").style.visibility = "visible";
        document.getElementById("lock-screen-time").style.visibility = "visible";
        document.getElementById("lock-screen-date").style.visibility = "visible";
        document.getElementById("lock").style.visibility = "visible";
        document.getElementById("home").style.visibility = "visible";
        document.getElementById("swipe").style.visibility = "visible";
    } else if(state == "off" && started == false) {
        document.getElementById("wallpaper").style.visibility = "hidden";
        document.getElementById("main-time").style.visibility = "hidden";
        document.getElementById("lock-screen-time").style.visibility = "hidden";
        document.getElementById("lock-screen-date").style.visibility = "hidden";
        document.getElementById("lock").style.visibility = "hidden";
        document.getElementById("home").style.visibility = "hidden";
        document.getElementById("swipe").style.visibility = "hidden";
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("main-time").innerHTML =  h + ":" + m;
    document.getElementById("lock-screen-time").innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

setInterval(function(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    document.getElementById("lock-screen-date").innerHTML = weekday[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate();
}, 1000);

function home() {
    //After setup is complete, the home button should activate this function instead of "setupHome()".
}

function removeThisShit() {
    //REMOVE THIS LATER!!!!
    setupComplete = true;
}