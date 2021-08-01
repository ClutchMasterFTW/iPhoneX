//Global Variables
var power = false;
var ringer = false;
var volume = 5;

function powerOn() {
    if(power == false) {
        //Turn On
        power = true;
    } else if(power == true) {
        //Turn Off
        power = false;
    }
}