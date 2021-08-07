//Global Variables
var passcode = null;
var hellos = [
    "Hello",
    "Hola",
    "你好",
    "こんにちは",
    "Bonjour",
    "Hallo",
    "Привет",
    "Olá",
    "Ciao",
    "안녕하세요",
    "Merhaba",
    "سلام",
    "สวัสดี",
    "Hallå",
    "Hej",
    "Xin chào",
    "cześć",
    "Hei",
    "Halo",
    "שלום",
    "γεια",
    "Buna ziua",
    "Szia",
    "Ahoj",
    "Здравствуйте",
    "zdravo",
    "Helo",
    "नमस्ते"
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