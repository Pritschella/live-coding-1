// Escribe tu código aquí.

/*
1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

    Escribe una función que reciba 2 parámetros
        Parámetro 1 - Un string
        Parámetro 2 - Un array de strings
    La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
    Ejemplo:
        const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
        bigWords('bocina', myArray);
        Output - ['insecto', 'bootcamp', 'escritorio']

*/

function bigWords(string, arreglo) {
    const resultado = arreglo.filter(word => word.length > string.length);
    return resultado;
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const palabraCoincide = bigWords('bocina', myArray);
console.log(palabraCoincide);

