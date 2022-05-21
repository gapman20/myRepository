/* Variables */
/* Declarando y asignando */
/* Mandar a llamar o accerder a la var */
/* Reasignar */

var contraseña;

var platos = 10;

contraseña = '1234';

contraseña = '12345';

var num1 = 12;
var num2 = 20;

var num3 = num1 - 1;
var num4 = num1;

var total = num1 + num2;


/* Tipos de datos */
/* Tipado de datos */
/* Numeros: int, float, double */

var entero = 85;
var flotante = 56.8;

/* String o cadena de texto */
/* "literal" */
/* var nombre = ''; */

var nombre = 'gabriel';
// console.log(nombre);

/* Booleanos */
/* true or false */

var muerto = false;
var vivo = true;

/* if (muerto){
    console.log('F');
}

if(vivo){
    console.log('Estoy vivo');
} */

/* EJERCICIO */

/* Crear un algoritmo:
    Crear 3 productos con su precio 
    Cartera 50usd 

 */

var agua = 5;
var papas = 15;
var jugo = 10;
var cartera = 45;

var cambio = 0;

var aguaTrFl =true;
var papasTrFl =true;
var jugoTrFl =true;

if(aguaTrFl){
    cambio = cartera - agua;
}

if(papasTrFl){
    cambio = cartera - papas;
}

if(jugoTrFl){
    cambio = cartera - jugo
}
if(aguaTrFl && papasTrFl){
    cambio = cartera - (agua + papas);
}
if(aguaTrFl && jugoTrFl){
    cambio = cartera - (agua + jugo);
}
if(papasTrFl && jugoTrFl){
    cambio = cartera - (papas + jugo);
}
if(papasTrFl && jugoTrFl && aguaTrFl){
    cambio = cartera - (papas + agua + jugo);
}
// console.log(cambio);

/* Operadores aritmeticos */
/* > Mayor que */
/* < Menor que  */
/* == igual que  */
/* >= Mayor o igual que  */
/* <= Menor o igual que  */

var num1 = 98;
var num2 = 73;

if(num1 == num2){
    console.log('La contraseña es correcta');
    console.log('Bienvenido!');
}else{
    console.log('Los campos no coinciden');
    console.log('Intentalo otra vez');
}

/* EJERCICIO */

/* Crear un algoritmo
    simular un bar 
    si el cliente es menor de 18 no lo dejas entrar 
    si es mayor lo dejas entrar 
*/

var edad = 18;

if(edad < 18){
    console.log('No eres mayor de edad');
    console.log('No puedes entrar aqui\n Vayase al kinder');
}else{
    console.log('Si tienes la edad para entrar');
    console.log('Pasale a lo barrido\nQue va a querer');
}

/* Operador
    != diferente de 
*/

// console.log(5 != 6);

/* prompt, confirm */



var con = confirm('¿Te gusta las hamburguesas?');

if(con == true){
    console.log('Vamos por una, yo invito');
}else{
    console.log('Ya no');
}

var password = '1234'
var preguntaContra = prompt('Cual es la contraseña?');

if(password == preguntaContra){
    console.log('Bienvenido');
}else{
    console.log('Vuelve a intentarlo');
}