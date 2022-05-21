/*---- TAREA 1---- */
var elem = [
    1, 5, 2, 3, 4, 7, 1, 2, 3, 5, 9, 7, 5, 3, 2, 0, 7, 4, 1, 3, 2, 5
];



for(var contador = 0; contador < elem.length; contador++){

    for(var contador2 = contador + 1; contador2 < elem.length; contador2++){
        if(elem[contador] == elem[contador2]){

            elem[contador] = null;
        }
    }
}

console.log(elem);


/*------- TAREA 2----- */



/* for(var contador = 1; contador < 100; contador++){
    if(contador % 3 == 0 && contador % 5 == 0 && contador % 15 == 0){
        console.log('fizzbuzz');
    }else if(contador % 5 == 0){
        console.log('buzz');
    }else if(contador % 3 == 0){
        console.log('fizz');
    }else{
        console.log(contador);
    }
} */

/* ---- TAREA 3 ---- */

/* var num = [
    1,8,4,7,3,6,5,2,0
]

for(var iterador = 0; iterador < num.length -1;iterador++){
    for(var iterador2 = 0; iterador2 < num.length - 1; iterador2++){
        if (num[iterador2] > num[iterador2 + 1]) {
            var aux = num[iterador2];
            num[iterador2] = num[iterador2 +1];
            num[iterador2 + 1] = aux;

        }
    }
}

for(var iterador3 = 0; iterador3 < num.length; iterador3++){
    console.log(num[iterador3]);
} */

