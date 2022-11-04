const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const reset = document.getElementById('reset');

function lampOn() {
    lamp.src = '../img/ligada.jpg';
}

function lampOff() {
    lamp.src = '../img/lampada.jpg';
}

function lampBreak() {
    lamp.src = './img/quebrada.jpg';
    turnOn.disabled = true;
    turnOff.disabled = true;
    reset.disabled = false;
}   

function lampReset(){
    lamp.src = '../img/lampada.jpg'
    turnOn.disabled = false;
    turnOff.disabled = false;
    reset.disabled = true;
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('dblclick', lampBreak);
reset.addEventListener('click', lampReset);