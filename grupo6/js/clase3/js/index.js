"use strict"

/* ---- WHILE ------ */

/* var index = 0;

while(index < 10){
    console.log('hee hee');
    index++;
} */

/* var index = 0;

do {
    console.log(index);
    index++;
}while(index < 100); */

/* ------- Se acaba programacion basica --------- */

var div1 = document.getElementsByTagName('div')[0];
var num = 0;
var colors = ["deeppink", "green", "blue", "blueviolet", "orange", "red" ];
var index = 0;


function cambiarClick() {
    div1.style.backgroundColor = colors[index];
    
    
    if (index == colors.length - 1) {
        index = 0;
        
    }else{
        index++;
    }
    
    /* Texto */
    var word = prompt();
    div1.innerText = word;
}



/* function cambiarClick() {
    if (num == 1) {
        div1.style.backgroundColor = 'blueviolet';
        num = 0;
    }else{
        div1.style.backgroundColor = 'deeppink'
        num = 1;
    }
} */


/* scoped */
/* hoisting */
/* use strict */

var nombreUsuario = null;

function usuario(){
    nombreUsuario = prompt('¿Cuales tu nombre?');
    mensaje();
}

function mensaje(){
    console.log('bienvenido: ' + nombreUsuario);
}

usuario();

