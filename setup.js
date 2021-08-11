//Global Variables
var passcode = null;
var hellos = [
    "Hello",
    "Hola",
    "&#20320;&#22909;",
    "&#12371;&#12435;&#12395;&#12385;&#12399;",
    "Bonjour",
    "Hallo",
    "&Pcy;&rcy;&icy;&vcy;&iecy;&tcy;",
    "&#79;&#108;&aacute;",
    "&#67;&#105;&#97;&#111;",
    "&#50504;&#45397;&#54616;&#49464;&#50836;",
    "&#77;&#101;&#114;&#104;&#97;&#98;&#97;",
    "&#1587;&#1604;&#1575;&#1605;",
    "&#3626;&#3623;&#3633;&#3626;&#3604;&#3637;",
    "&#72;&#97;&#108;&#108;&aring;",
    "&#72;&#101;&#106;",
    "&#88;&#105;&#110;&#32;&#99;&#104;&agrave;&#111;",
    "&#99;&#122;&#101;&sacute;&cacute;",
    "&#72;&#101;&#105;",
    "&#72;&#97;&#108;&#111;",
    "&#1513;&#1500;&#1493;&#1501;",
    "&gamma;&epsiv;&iota;&alpha;",
    "&#66;&#117;&#110;&#97;&#32;&#122;&#105;&#117;&#97;",
    "&#83;&#122;&#105;&#97;",
    "&#65;&#104;&#111;&#106;",
    "&Zcy;&dcy;&rcy;&acy;&vcy;&scy;&tcy;&vcy;&ucy;&jcy;&tcy;&iecy;",
    "&#122;&#100;&#114;&#97;&#118;&#111;",
    "&#72;&#101;&#108;&#111;",
    "&#2344;&#2350;&#2360;&#2381;&#2340;&#2375;"
];
var currentHello = 0;

function setup() {
    document.getElementById("screen").style.backgroundColor = "white";
    document.getElementById("main-time").style.visibility = "visible";
    document.getElementById("home").style.visibility = "visible";
    document.getElementById("swipe").style.visibility = "visible";
    document.getElementById("hello").style.visibility = "visible";
    setInterval(function() {
        if(currentHello < hellos.length) {
            document.getElementById("hello").innerHTML = hellos[currentHello];
            currentHello++;
        } else {
            currentHello = 0;
            document.getElementById("hello").innerHTML = hellos[currentHello];
        }
    }, 3000);
}

function setupHome() {
    document.getElementById("home").setAttribute("onclick", "home()");
    document.getElementById("home").style.backgroundColor = "white";
    document.getElementById("main-time").style.backgroundColor = "white";
    document.getElementById("swipe").style.backgroundColor = "white";
}