const output = document.querySelector('#output');
const fullBtn = document.querySelector('#full');
const dateBtn = document.querySelector('#date');
const timeBtn = document.querySelector('#time');

let forMode = 'time';

function update (){
    output.textContent = format(forMode);
}

setInterval(()=> {
    update()
},1000)

update();

setInterval(function(){
    output.textContent = format(forMode);
},1000)

function format(forMode){
    const now = new Date();
    switch(forMode){
        case 'time': return now.toLocaleTimeString();
        case 'date' : return now.toLocaleDateString();
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        default: return now.toLocaleTimeString();
    }
}

fullBtn.onclick = bineMode('full');
dateBtn.onclick = bineMode('date');
timeBtn.onclick = bineMode('time');

function bineMode (name){
    return function(){
        forMode = name;
        update();
    }
}