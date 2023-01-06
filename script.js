/*
    Función para obtener los numeros que no se repiten de un array
*/

function returnUnique ( array ) {
    return array.filter( i => array.indexOf(i) === array.lastIndexOf(i));
}

let array = [5,5,2,4,4,4,9,9,1,2]; // números únicos 1

let response = returnUnique(array);

console.log("=== response ===");
console.log(response);