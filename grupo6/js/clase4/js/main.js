/* var input = document.getElementById('data');
var dataInput = '';


function clearInput(){
    input.value = '';
}

function getData(){
    dataInput = dataInput + '<p>' + input.value + '</p>';
    createCard();
    clearInput();
    Mejorarlo con un array
}

function createCard(){
    var container = document.getElementsByClassName('cards')[0];
    container.innerHTML = dataInput;
} */

var input = document.getElementById('data');
var dataInput = '';


function clearInput(){
    input.value = '';
}

function getData(){
    dataInput = input.value;
    createCard();
    clearInput();
    
}

function createCard(){
    var container = document.getElementsByClassName('cards')[0];
    var element = document.createElement('div');
    element.innerHTML = '<h2>' + dataInput + '</h2>'

    container.appendChild(element);
} 



/* -------------- */


function getName() {
    var nameInput = document.getElementById('data').value;
    var mensajeProcesado = bienvenida(nameInput);
    createName(mensajeProcesado);
    clearInput();
}


function bienvenida(nameInput){
    
    var text = 'Bienvenido' + nameInput;
    
    return text;
}

function createName(mensajeProcesado) {
    var container = document.getElementsByClassName('cards')[0];
    var element = document.createElement('div');
    element.innerHTML = '<h2>' + mensajeProcesado + '</h2>'    
    container.appendChild(element);
}


