
// /*
// Ejercicio 1: cree un array con todas las edades de los estudiantes de su clase. Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.
// */
// let edades = [17,15,16,14,20,19,17,18,19,20,17,18,17,18];
// let i = 0;
// console.log(`Las edades de los alumnos son: `);
// while(i<(edades.length)){
//     console.log(edades[i]);
//     i++
// }

// /*
// Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".
// */
// let edades = [17,15,16,14,20,19,17,18,19,20,17,18,17,18];
// for(let i = 0; i < edades.length;i++){
//     if(edades[i]%2 === 0){
//         console.log(edades[i])
//     }
// }

/*
Ejercicio 3: escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola.
*/
// let array = []
// function numeroMasBajo(array){
//     return Math.min(...array); // Los ... son de "destructuring assignement", convierte los espacios del array en variables
// }

/*
Ejercicio 4: escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.
*/
// let array = []
// function numeroMasAlto(array){
//     return Math.max(...array);
// }

/*
Ejercicio 5: Escriba una función que reciba dos parámetros, una array y un índice. La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
*/
// function mostrarElemento(array, indice){
//     console.log (array[indice-1]);
// }
// // No estoy seguro de como evitar que me salga el undefined al no tener return.

/*
Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se repiten. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
*/
// function repetidos(array){
//     for(posicion in array){
//         let aparicionInicial = posicion;
//         let aparicionFinal = array.lastIndexOf(array[posicion]);
//         if(aparicionInicial != aparicionFinal){
//             console.log(array[posicion]);
//         }
//     }
// }

/*
Ejercicio 7: escriba una función de JavaScript simple para unir todos los elementos de la siguiente array en una cadena. 
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro"
*/
// function mostrar (array){
//     console.log(array.join(", "))
// }

/*
Ejercicio 8: escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.
*/
function invertir(numero){
    // let numString = numero.toString();
    let numInvertido = String(numero).split("").reverse().join("");
    //primer prueba, antes de encontrar la función "reverse()"
    // for(let i = numero.toString().length; i > 0; i--){
    //     numInvertido += numero.toString()[i-1];
    // }
    return numInvertido;
}
function invertir2(numero){
    let convertirANumero = num =>  Number(num);
    let pruebaConversion = Array.from(String(numero),convertirANumero)
    console.log(typeof(pruebaConversion));
    let pruebaInvertido = pruebaConversion.reverse().join("");
    console.log(pruebaInvertido);
}
//no funciona esto, fallan cuando tiene muchos números. también pienso que se puede hacer sacando el resto de la división por diez, dividiendo por diez, truncando, y reptiendo, hasta que quede un sólo digito, y ahí agrego el digito a la variable.

/*
Ejercicio 9: escriba una función de JavaScript que devuelva una cadena en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena.
*/
// function ordenarLetras(string){
//     let stringOrdenado = string.split("").sort().join("");
//     return stringOrdenado;
// }

/*
Ejercicio 10: escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia".
*/
// function mayusPrimerasLetras(cadena){
//     let arrayPalabras = cadena.split(" ");
//     let conMayusculas = []
//     for(elemento of arrayPalabras){
//         conMayusculas.push(elemento.charAt(0).toUpperCase() + elemento.slice(1)); 
//     }
//     let resultado= conMayusculas.join(" ");
//     return resultado;
// }

/*
Ejercicio 11: escriba una función de JavaScript que busque la palabra más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".
*/
// function palabraMasLarga(cadena){
//     let arrayCadena = cadena.split(" ");
//     let arrayLongitudes = [];
//     for(elemento of arrayCadena){
//         arrayLongitudes.push(elemento.length);
//     }
//     let posicionMaximo = arrayLongitudes.indexOf(Math.max(...arrayLongitudes));
//     return arrayCadena[posicionMaximo];
// }