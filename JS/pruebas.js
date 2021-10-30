//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
// alert("hello world!");

//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
// document.write("Hello world!");

//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// document.write(3+5);

//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
// var usuario = prompt("Nombre de usuario:");
// document.write("Hola " + usuario)

//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// var numero1 = prompt("número1") ;
// var numero2 = prompt("numero2");
// document.write(Number(numero1)+Number(numero2));

//alterno con más líneas
// var ingreso1 = prompt("número1") ;
// var ingreso2 = prompt("numero2");
// var num1 = parseInt(ingreso1);
// var num2 = parseInt(ingreso2);
// document.write(num1+num2);

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let num1 = prompt("ingrese el primer número");
// let num2 = prompt("ingrese el segundo número");

// if(num1 > num2){
//     document.write(num1)
// }else{
//     document.write(num2)
// }

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// let num1 = prompt("ingrese el primer número");
// let num2 = prompt("ingrese el segundo número");
// let num3 = prompt("ingrese el tercer número");

// if(num1 > num2 && num1 > num3){
//     document.write(num1)
// }else if (num2 > num1 && num2 > num3){
//     document.write(num2)
// }else{
//     document.write(num3)
// }

//Escribe un programa que pida un número y diga si es divisible por 2
// let num = prompt("ingrese un número")

// if (num%2 == 0 ){
//     document.write("El número es divisible por dos")
// }else{
//     document.write("El número no es divisible por dos")
// }

//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// let cadena = prompt("escribir una frase");
// let cantidadA = [];
// for(let i = 0; i < cadena.length; i++){
//     if(cadena[i].toLowerCase() === "a"){
//         cantidadA.push(i);
//     }
// }

// document.write(`La cantidad de veces que aparece la letra "a" es ${cantidadA.length}`)

//Escribe un programa que pida una frase y escriba las vocales que aparecen
// let cadena = prompt("Ingrese una frase");
// let vocales = ["a", "e", "i", "o", "u"];
// document.write("Esta frase incluye las vocales ")
// for(vocal of vocales){
//     console.log(`chequeo la vocal ${vocal}`)
//         if(cadena.includes(vocal)){
//                 document.write(vocal + ", ")
//         }
// }
// // Problema: La última que muestra, también aparece con coma...

//Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
// let cadena = prompt("escribir una frase");
// let cantidadVocales = [];
// for(let i = 0; i < cadena.length; i++){
    //     if(cadena[i].toLowerCase() === "a" ||
    //        cadena[i].toLowerCase() === "e" ||
    //        cadena[i].toLowerCase() === "i" ||
    //        cadena[i].toLowerCase() === "o" ||
    //        cadena[i].toLowerCase() === "u"){
        //         cantidadVocales.push(i);
        //     }
        // }
// }
        // document.write(`Hay ${cantidadVocales.length} vocales en la frase`)


//ejercicio que realicé por mi mismo.
//Que encuentre las vocales y las escriba en el orden que aparecen
// let cadena = prompt("escribir una frase");
// let vocalesEnCadena = [];
// let vocales = ["a","e", "i", "o", "u"]
// for(let i = 0; i < cadena.length; i++){
//     for(vocal of vocales){
//         //Chequear que esté haciendo el ciclo
//         console.log("entré al for")
//         console.log(`${cadena[i]} con letra ${vocal}`)
//         if(cadena[i].toLowerCase() == vocal){
//             vocalesEnCadena.push(vocal);
//             console.log(`se cargó la letra ${vocal}`);
//             break;
//         }else {
//             console.log("no entre al if")
//         }
//     }
// }
// document.write(`Las vocales que aparecen en la frase escrita son:`)
// for(vocal in vocalesEnCadena){
//     document.write(vocalesEnCadena[vocal])
// }


//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
// let cadena = prompt("escribir una frase");
// let cantidadVocales = {a: 0, e: 0, i: 0, o: 0, u: 0};
// let vocales = ["a", "e", "i", "o", "u"];
// for(caracter in cadena){
//     console.log(`compruebo el caracter ${caracter}`)
//     for(vocal of vocales){
//         console.log(`chequeo la vocal ${vocal}`)
//             if(cadena[caracter].toLowerCase() == vocal){
//                 console.log(`entre al if del caracter ${cadena[caracter]} y vocal ${vocal}`)
//                 cantidadVocales[vocal] += 1;
//             }
//     }

// }

//         document.write(`la vocal a se encuentra ${cantidadVocales.a} <br>`)
//         document.write(`la vocal e se encuentra ${cantidadVocales.e} <br>`)
//         document.write(`la vocal i se encuentra ${cantidadVocales.i} <br>`)
//         document.write(`la vocal o se encuentra ${cantidadVocales.o} <br>` )
//         document.write(`la vocal u se encuentra ${cantidadVocales.u} <br>`)


//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// let num = prompt("Ingrese un número");
// if (num % 2 === 0){
//         document.write("El número es divisible por 2");
// }else if (num % 3 === 0){
//         document.write("El número es divisible por 3");
// }else if (num % 5 === 0){
//         document.write("El número es divisible por 5");
// }else if (num % 7 === 0){
//         document.write("El número es divisible por 7");
// }else {
//         document.write("El número no es divisible por 2, 3, 5 o 7")
// }

//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
// let num = prompt("Ingrese un número");
// let divisores = [2, 3, 5, 7]
// document.write("El número es divisible por ")
// for(numero of divisores){
//         if(num % numero === 0){
//                 document.write(`${numero}, `)
//         }
// }

//Escribir un programa que escriba en pantalla los divisores de un número dado
// let num = prompt("Ingrese un número");
// document.write("Los divisores del número ingresado son: ");
// for(let i = 1 ; i <= (num/2); i++){
//         if(num % i === 0){
//                 document.write(`${i}, `);
//         }
// }
// document.write(num);

//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
// let num1 = prompt("Ingrese un número");
// let num2 = prompt("Ingrese otro número");
// let divisoresPrimerNumero = [];
// let divisoresSegundoNumero = [];
// document.write("Los divisores del primer número ingresado son: ");
// for(let i = 1 ; i <= (num1/2); i++){
//         if(num1 % i === 0){
//                 divisoresPrimerNumero.push(i);
//                 document.write(`${i}, `);
//         }
// }
// document.write(num1);
// divisoresPrimerNumero.push(num1);
// document.write("<br>Los divisores del segundo número ingresado son: ");
// for(let i = 1 ; i <= (num2/2); i++){
//         if(num2 % i === 0){
//                 divisoresSegundoNumero.push(i);
//                 document.write(`${i}, `);
//         }
// }
// document.write(num2);
// divisoresSegundoNumero.push(num2);

// for(numero of divisoresPrimerNumero){
//         console.log(`array divisores primer número: ${numero}, `);
// }

// for(numero of divisoresPrimerNumero){
//         console.log(`array divisores segundo número: ${numero}, `);
// }

// document.write("<br>Los divisores en común son:");
// for(divNumero1 of divisoresPrimerNumero){
//         console.log(`bucle ${divNumero1}`)
//         for(divNumero2 of divisoresSegundoNumero){
//                 console.log(`bucle ${divNumero2}`)
//                 if(divNumero1 == divNumero2){
//                         document.write(`${divNumero1}, `)
//                         console.log(`${divNumero1} es igual a ${divNumero2}`)
//                 }else{
//                         console.log(`${divNumero1} no es igual a ${divNumero2}`)
//                 }
//         }
// }

//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
// let num = prompt("Ingrese un número");
// let divisores = []
// for (let i=2; i <= (num/2);i++){
//         if(num % i === 0){
//                 divisores.push(i);
//                 console.log(`divisor ${i}`)
//         }
// }

// if(divisores[0] == undefined){
//         document.write("El número es primo")
// }else{
//         document.write("El número no es primo")
// }

//Pide la edad y si es mayor de 18 años indica que ya puede conducir
// let edad = prompt("Indique su edad:")
// if(edad >= 18){
//         document.write("Ya puede conducir")
// }else{
//         document.write("no puede conducir")
// }

/*
Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-4: Insuficiente
● 5-6: Suficiente
● 7: Bien
● 7-8: Notable
● 10: Sobresaliente
*/
// let nota = Number(prompt("Ingrese su nota:"));
// let calificacion = 0;
// switch (nota){
//         case 0:
//         case 1:
//         case 2:
//         case 3:        
//                 calificacion = "Muy deficiente";
//                 break;
//         case 3:
//         case 4:        
//                 calificacion = "Insuficiente";
//                 break;
//         case 5:
//         case 6:        
//                 calificacion = "Suficiente";
//                 break;
//         case 7:        
//                 calificacion = "Bien";
//                 break;
//         case 8:
//         case 9:                        
//                 calificacion = "Notable";
//                 break;
//         case 10:
//                 calificacion = "Sobresaliente";
//                 break;
//         default:
//                 calificacion = "Inválida";
// }

// document.write(`Su calificación fue ${calificacion}`)
// //con if se podría hacer para considerar notas con decimales.


//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// let listadoCadenas = [];
// let cadena = "";
// while (cadena != null){
//         cadena = prompt("ingrese una cadena de texto:");
//         listadoCadenas.push(cadena);
// }

// let resultado = listadoCadenas.join("-");
// let resultadoSinGuionFinal = resultado.substring(0,resultado.length -1); 
// document.write(resultadoSinGuionFinal);

//Realiza un script que pida números hasta que se pulse “cancelar". Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// let listadoNumeros = [];
// let ingresado = 0;
// let resultado = 0;
// console.log(typeof(ingresado));
// while (ingresado != null){
//         ingresado = prompt("ingrese un número de texto:");
//         if(ingresado === null){
//                 break;
//         }else if(isNaN(parseInt(ingresado))){
//                 alert("No es un número");
//         }else{
//                 listadoNumeros.push(parseInt(ingresado));
//         }
// }

// for(numero of listadoNumeros){
//         resultado += numero; 
// }
// document.write(resultado);


/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número 23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
// let dni = "";
// let valorNumero = 0;
// let valorLetra = "";

// while (dni != null){
//         dni = prompt("ingrese un dni:");
//         if(dni === null){
//                 break;
//         }else if(dni < 0 || dni > 99999999 || isNaN(parseInt(dni))){
//                 alert("El número ingresado no es un DNI");
//         }else{
//                 valorNumero = dni % 23;
//                 console.log(valorNumero);
//                 switch(valorNumero){
//                         case 0: valorLetra = "T"; break;
//                         case 1: valorLetra = "R"; break;
//                         case 2: valorLetra = "W"; break;
//                         case 3: valorLetra = "A"; break;
//                         case 4: valorLetra = "G"; break;
//                         case 5: valorLetra = "M"; break;
//                         case 6: valorLetra = "Y"; break;
//                         case 7: valorLetra = "F"; break;
//                         case 8: valorLetra = "P"; break;
//                         case 9: valorLetra = "D"; break;
//                         case 10: valorLetra = "X"; break;
//                         case 11: valorLetra = "B"; break;
//                         case 12: valorLetra = "N"; break;
//                         case 13: valorLetra = "J"; break;
//                         case 14: valorLetra = "Z"; break;
//                         case 15: valorLetra = "S"; break;
//                         case 16: valorLetra = "Q"; break;
//                         case 17: valorLetra = "V"; break;
//                         case 18: valorLetra = "H"; break;
//                         case 19: valorLetra = "L"; break;
//                         case 20: valorLetra = "C"; break;
//                         case 21: valorLetra = "K"; break;
//                         case 22: valorLetra = "E"; break;
//                 }
//                 document.write(valorLetra);
//         }
// }

/*
Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
…….
*/
// for(i=1;i<25;i++){
//         document.write(i.toString().repeat(i));
//         document.write("<br>");
// }

/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
*/
// for(i=6;i>0;i--){
//         document.write(i.toString().repeat(i));
//         document.write("<br>");
// }

/*
Un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9
*/
for(i=1;i<=500;i++){
        if(i%4 === 0){
                document. write(`${i} (Múltiplo de 4)<br>`)
        }else{
                document. write(`${i}<br>`) 
        }
        if(i%5 === 0){
                document.write("____________<br>")
        }
}