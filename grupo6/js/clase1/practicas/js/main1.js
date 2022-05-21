/*------------PRACTICA 1--------------*/

/* var name1 = prompt('¿Cual es tu nombre?');
var name2 = prompt('¿Cual es tu nombre?');
var name3 = prompt('¿Cual es tu nombre?');

var age1 = prompt('¿Cual es tu edad?');
var age2 = prompt('¿Cual es tu edad?');
var age3 = prompt('¿Cual es tu edad?');

console.log('Cual es tu nombre?');
console.log('Cual es tu edad?');

if (age1 > age2) {
    if (age1 > age3) {
        console.log(name1+ ' es el mayor');
    }else{
        console.log(name1+' y '+name3+' son los mayores');
    }
}else
if (age2 > age3) {
    if (age2 > age1) {
        console.log(name2+ ' es el mayor');
    }
}else
if(age3 > age2){
    if (age3 > age1) {
        console.log(name3+' es el mayor');
    }
}else{
    if (age1 == age2) {
        if (age1 == age3) {
            console.log('Los tres son de la misma edad');
        }else{
          console.log(name1+' y '+name2+' son los mayores');    
        }
    }else{
        if (age2 == age3) {
            console.log(name2+' y '+name3+' son los mayores');
        } else {
            console.log(name1+' y '+name3+' son los mayores');
        }
    }

} */

/*----------PRACTICA 2------------*/

var nameStudent = prompt('Nombre del alumno');

if (nameStudent == 'Pedro') {
    console.log('La calificacion de '+nameStudent+' es de 8');
}else if (nameStudent == 'María') {
    console.log('La calificaion de '+nameStudent+' es de 10');
}else if (nameStudent == 'Juanita') {
    console.log('La calificacion de '+nameStudent+' es de 7');
}else{
    console.log('No se encontro este alumno, escriba bien el nombre ó se equivoco de escuela');
}

/*------ PRACTICA 3--------*/

/* var hits = prompt('¿Cuantos aciertos tiene?');

if (hits > 50) {
    console.log('La calificación es de 10');
}else{
    if (hits > 40) {
        console.log('La calificación es de 8');
    }else{
        if (hits > 30) {
            console.log('La calificación es de 6');
        }else{
            console.log('La calificación es de 5');
        }
    }
} */

/*-------PRACTICA 4------ */

/* var number1 = prompt('Elige el número 1');
var number2 = prompt('Elige el número 2');

if (number1 > number2) {
    console.log('El primer número que elegiste es el mayor y es el: '+number1);
} else {
    console.log('El segundo número que elegiste es el mayor y es el: '+number2);
} */

/*-------PRACTICA 5--------- */

/* var number1 = prompt('Elige el primer número');
var number2 = prompt('Elige el segundo número');

if (number1 < number2) {
    console.log('El primer numero que elegiste es menor y es el: '+number1);
} else {
    console.log('El segundo numero que elegiste es menor y es el: '+number2);
} */

/*--------PPRACTICA 6---------*/

/* var password = prompt('Introduzca la contraseña');

if (password == 'Pay de Manzana') {
    console.log('Bienvenidos al himalaya');
} else {
    console.log('Sigue participando');
} */

/* ---------PRACTICA 7------- */

/* var number = prompt('Pon un numero');

var residue = (number % 2);

if (residue == 0) {
    console.log('El numero que elegiste es par');
} else {
    console.log('El numero que elegiste es impar');
} */


/* -------PRACTICA 8--------- */

/* var age = prompt('¿Cúal es tu edad?');

if (age > 17) {
    console.log('¡Usted puede manejar!');
} else {
    console.log('Vuelva cuando tenga 18 o más, aun no puede manejar');
} */