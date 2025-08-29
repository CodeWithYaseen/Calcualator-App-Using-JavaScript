// console.log("JavaScript Connected");

var display = document.getElementById('display');

function append(value){
    display.value += value;
}
function clearAll(){
    display.value = "";
}

function clearOne(){
    display.value = display.value.slice(0,-1);
}

function equal(){
    display.value = eval(display.value);
}

