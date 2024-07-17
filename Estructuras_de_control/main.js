//Estructuras de control

//Ejercicio 1
//Solicitamos al usuario que ingrese un número 

let numero = parseInt(prompt("Por favor ingresa un número:"));

//Vaamos a verificar que el número ingresado sea válido

if (isNaN(numero) || numero < 1){
    console.log("Por favor ingresa sólo números iguales o mayores que 1");
    alert ("Por favor ingresa sólo números iguales o mayores que 1")
} else {
    console.log(`Los múltiplos de 5 desde 1 hasta ${numero} son:`);
    alert (`Los múltiplos de 5 desde 1 hasta ${numero} son:`);

    let i = 1;
    while (i <= numero){
        if (i % 5 === 0){
            console.log(i);
            alert (i);
        }
        i++;
    }
}

//Ejercicio 2
//Solicitamos al usuario que ingrese dos números que esten entre el 1 y el 50

let numero1 = parseInt(prompt("Por favor ingrese un número entre el 1 y el 50"));
let numero2 = parseInt(prompt("Por favor ingrese otro número entre el 1 y el 50"));

//Verificamos que los números ingresados por el usuario sean válidos
if ((isNaN(numero1) || numero1 < 1 || numero1 > 50) || (isNaN(numero2) || numero2 < 1 || numero2 > 50)){
    console.log("Error, Por favor ingrese únicamente dos números entre 1 y 50");
} else {
    for (let i = 1; i <= 50; i++){
        if (i === numero1 || i === numero2){
            console.log(i + "!Lorería¡");
            alert (i + "!Lorería¡");
        } else {
            console.log(i);
            alert (i);
        }
    }
}

//Ejercicio 3
//Creamos un array vacío para guardar los números

let numerosCapturados = []

//Realizamos una variable para gguardar el numero ingresado

let numeroIngresado;

do {
    numeroIngresado = parseInt(prompt("Por favor ingresa un número, para salir ingresa 0:"));
    if (isNaN(numeroIngresado) && numeroIngresado !== 0){
        numerosCapturados.push(numeroIngresado);
    }
} while (numeroIngresado !== 0);

console.log("Lista de números capturados:", numerosCapturados);
alert ("Lista de números capturados:" + numerosCapturados.join(", "));

// Ejercicio 4
// Crear un array vacío para guardar las palabras

let palabrasCapturadas = [];

let palabraIngresada;

do {
    palabraIngresada = prompt("Por favor ingrese una letra o palabra, para salir dejar en blanco");
    if (palabraIngresada !== null && palabraIngresada.trim() !== "")
    {
        palabrasCapturadas.push(palabraIngresada);
    }
} while (palabraIngresada !== null && palabraIngresada.trim() !== "");

//Concatemanos las palabras

let resultado = palabrasCapturadas.join(" ");

console.log("Concatenación de las palabras capturadas:" , resultado);
alert ("Concatenación de las palabras capturadas:" + resultado);

//Ejercicio 5

//realizamos una funcion para mostrar el mensaje según el día

function mensajeDia(dia) {
    switch (dia.toLowerCase()){
        case "lunes":
            return "¡Ánimo que hoy empieza la semana!";
        case "martes":
            return "Hoy es un gran día para seguir adelante";
        case "miercoles":
            return "Ya estás a la mitad de la semana";
        case "jueves":
            return "Jueves con sabor a viernes";
        case "viernes":
            return "Al fin viernes, a salir de la rutina";
        case "sabado" || "sábado":
            return "Disfruta este fin de semana";
        case "domingo":
            return "Ve a descansar";
            default:
                return "Por favor ingresa un día válido.";
    }
}

//Realizamos una variable para guardar el dato ingresado

let diaIngresado;

do{
    diaIngresado = prompt("Por favor ingresa un día de la semana, por ejemplo: sábado");

    if (diaIngresado !== null && diaIngresado.trim() !== ""){
        let mensaje1 = mensajeDia(diaIngresado.trim());
        alert (mensaje1);
        console.log(mensaje1);
    }
} while (diaIngresado.toLowerCase().trim() !== "domingo");

