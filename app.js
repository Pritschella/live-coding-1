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


//Función con parametros que solicita (String y arreglo), que utiliza un método llamado filter para medir el tamaño de la palabra utilizando word.length.
function bigWords(string, arreglo) {
    const resultado = arreglo.filter(word => word.length > string.length);
    return resultado;
}

//Declaración del arreglo con palabras random, dadas en el ejemplo. 
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
//Comparación de la palabra, con las del arreglo, haciendo uso de la función bigWords
const palabraCoincide = bigWords('bocina', myArray);
//Impresión de las palabras que coinciden con la instrucción.
console.log(palabraCoincide);


/*
2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (

) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento
. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

    Escribe una función que reciba 1 parámetro
        Parámetro 1 - Un array de strings
    La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento
    .
    Ejemplo:
        const myArray = ['insecto', 'bootcamp', 'escritorio'];
        printArray(myArray);
        Output - <li>insecto</li> <li>bootcamp</li> <li>escritorio</li> 3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs.
*/

function impresionArreglo(arrayDeStrings) {
    const elementoDeLista = document.getElementById("lista");

    arrayDeStrings.forEach(word => {
        const elemento = document.createElement('li');
        elemento.textContent = word;
        elementoDeLista.appendChild(elemento);
    });

}

//Pruebas
const myArray2 = ['insecto', 'bootcamp', 'escritorio'];
impresionArreglo(myArray2);

const myArray3 = ['mangos', 'reptil', 'mosca'];
impresionArreglo(myArray3);