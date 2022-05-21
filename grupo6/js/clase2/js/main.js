/* Operadores aritmericos o matematicos */
/* + - * / % */

/* var perro = true;
var gato = false;
var perico = ""; */

/* if (perico) {
    console.log('yei');
}else if(perico){
    console.log('El perico esta muerto');
}else{
    console.log('La variable esta vacia');
} */


/* var aciertos = prompt("Ingresa numero de aciertos:");

if (aciertos <= 30) {
  console.log("Calificacion de 5");
} else if (aciertos > 30 && aciertos <= 40) {
  console.log("Calificacion de 6");
} else if (aciertos > 40 && aciertos < 50) {
  console.log("Calificacion de 8");
} else if (aciertos >= 50) {
  console.log("Calificacion de 10");
}else{
    console.log('');
} */

/* SWITCH CASE */

/* var aciertos = prompt("Ingresa numero de aciertos:");
aciertos = parseInt(aciertos); */
/* aciertos = parseFloat(aciertos);*/


/* switch (aciertos) {

    case 10:
        console.log('tienes 10 aciertos');
        break;
        case 20:
        console.log('tienes 20 aciertos');
        break;
        case 30:
        console.log('tienes 30 aciertos');
        break;
    default:
        break;
} */

/* NULL - UNDEFINED */

/* ARRAYS */

/* var frutas = [
    'gabriel', 
    'perro',
    50,
    -123,
    23.54,
    true,
    false,
];

frutas[0] = 'Gabriel';
frutas[9] = null;
frutas[10] = null;
frutas[15] = 'pera' */

/* console.log(frutas); */

/* BUCLES */
/* for, dowhile, while, forofo, forrin, foreach, map, set, function */


/* for ( var contador = 0; contador < frutas.length ; contador++ ){
    console.log(frutas[contador]);
} */


/* EJERCICIO  */
/* Crear algoritmo:
    devolver la lista de un top 5

*/

var top = [];

mensaje = alert('Dame tu top de peliculas')

for (var contador = 0; contador < 5; contador++) {
    top[contador]= prompt('Dime tu numero '+contador+' de peliculas');
    
}