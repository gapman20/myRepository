/* Objetos */
var allUsers = [];

function getDataInput(input) {
    return input.value; /* regresa el input */
}

function createUserArray(){
    var newUser = []; /* Se crea un array vacio */
    var inputs = document.getElementsByTagName('input') /* obtenemos todos los inputs */

    for (let index = 0; index < inputs.length; index++) { 
        newUser.push(getDataInput(inputs[index])); /* el for lo usaremos para optimizar codigo y no repetir lineas.*/
        
    }

    return newUser;
    
}

function createUserObj(){
    var newUser = {}; /* Se crea un objeto vacio */
    var inputs = document.getElementsByTagName('input') /* obtenemos todos los inputs */

    newUser.userName = getDataInput(inputs[0]); 
    newUser.email = getDataInput(inputs[1]);
    newUser.color = getDataInput(inputs[2]);
    newUser.pass = getDataInput(inputs[3]);

    return newUser;
}

function saveAllUsers(){
    allUsers.push(createUserObj());  /* El push sirve para añade un elemento mas al array */
    console.log(allUsers);
}

function renderAllUsers() {
    var container = document.querySelector('.users');

    for (let index = 0; index < allUsers.length; index++) {

        var element = document.createElement('div');
        element.innerHTML = `
        <h2>UserName: ${allUsers[index].userName} </h2>
        <h3>Email: ${allUsers[index].email} </h3>
        <h3>Color: ${allUsers[index].color} </h3>
        <h3>Password: ${allUsers[index].pass} </h3>

        `;
        container.appendChild(element)
        
    }
}


/* var usuario1 = [
    'gabriel',
    'gab@gmail.com',
    '#ffff',
    '123'
]

var usario = {
    user: 'gabriel',
    email: 'gab@gmail.com',
    color: '#fffff',
    pass: '123'
};  */
