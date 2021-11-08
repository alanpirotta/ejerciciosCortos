/*
Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”
*/
// function mostrarNVeces(N){
//         for(i=0;i<N;i++){
//                 console.log("Bienvenidos al curso Ful Stack");
//         }
// }
// mostrarNVeces(prompt("Ingrese un número"));

/*
Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo
*/
// function max(num1, num2){
//         if(num1 > num2){
//                 return num1;
//         }else{
//                 return num2;
//         }
// }

// //Alternativa
// function maximo(num1, num2){
//         return Math.max(num1, num2);
// }

/*
Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.
*/
// function promedio3(num1, num2, num3){
//         return (num1+num2+num3)/3;
// }

/*
Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función)Una función que se llame siguiente, que reciba como parámetro un valor entero, y devuelva el siguiente del número ingresado como parámetro
*/
// function lectora(){
//         let nota = 0;
//         let valor = 0;
//         let cantidadDeNumeros = 0;
//         while(valor != -1){
//                 valor = Number(prompt("ingrese una nota. Ingrese -1 para finalizar"));
//                 if(valor == "" || valor === null || valor == -1){
//                         continue;
//                 }else{
//                         cantidadDeNumeros++;
//                         nota += valor;
//                         console.log(`Se agrega ${valor} sumando ${nota} con ${cantidadDeNumeros} cantidad de números`)
//                 }
//         }
//         console.log(`La suma final es ${nota} y la cantidad de números ingresados fue de ${cantidadDeNumeros}`)
//         return nota/cantidadDeNumeros;
// }

// function siguiente(num){
//         num++;
//         return num;
// }

/*
Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.
*/
// function doble(num){
//         return num * 2;
// }

/*
Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del numero ingresado como parámetro elevado al cuadrado.
*/
// function cuadrado(num){
//         return num * num;
// }

/*
Una función que se denomine imprimirValores que dado un número por parámetro, imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas en los puntos anteriores : siguiente, el doble y el cuadrado.
*/
// function siguiente(num){
//         num++;
//         return num;
// }
// function doble(num){
//         return num * 2;
// }
// function cuadrado(num){
//         return num * num;
// }
// function imprimirValores(num){
//         document.getElementById("body").innerHTML = `Número ingresado: ${num}<br>Número siguiente: ${siguiente(num)}<br>Doble del número: ${doble(num)}<br>Cuadrado del número: ${cuadrado(num)}`;
// }

/*
Una función que se denomine imprimirElSiguienteDelDoble que dado un número por parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los ej anteriores : siguiente, el doble.
*/
// function siguiente(num){
//         num++;
//         return num;
// }
// function doble(num){
//         return num * 2;
// }
// function imprimirElSiguienteDelDoble(num){
//         document.getElementById("body").innerHTML = `Número ingresado: ${num}<br>Doble del número: ${doble(num)}<br>Siguiente del doble: ${siguiente(doble(num))}`;
// }

/*
Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por parámetro, imprima cual es el doble del siguiente al cuadrado. Usando las funciones definidas en ejercicios anteriores : siguiente, el doble y el cuadrado
*/
// function siguiente(num){
//         num++;
//         return num;
// }
// function doble(num){
//         return num * 2;
// }
// function cuadrado(num){
//         return num * num;
// }
// function imprimirElDobleDelSiguienteAlCuadrado(num){
//         document.getElementById("body").innerHTML = `Número ingresado: ${num}<br>Número siguiente: ${siguiente(num)}<br>Cuadrado del siguiente: ${cuadrado(siguiente(num))}<br>Doble del siguiente al cuadrado: ${doble(cuadrado(siguiente(num)))}`;
// }

/*
Una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
*/
// function perimetroCuadrado(lado){
//         return lado * 4;
// }

/*
Una función que dado la longitud de un lado de un cuadrado devuelva la superficie.
*/
// function areaCuadrado(lado){
//         return lado * lado;
// }

/*
Una función que dado el radio de un círculo devuelva la circunferencia (perímetro del círculo).
*/
// function circunferencia(radio){
//         return Math.PI * radio * 2;
// }

/*
Una función que dado el radio de un círculo devuelva el área del círculo.
*/
// function areaCirculo(radio){
//         return Math.PI * radio * radio;
// }

/*
Una función que dado un número de mes y me devuelva la cantidad de días de ese mes (suponiendo que no es un año bisiesto).
*/
// function cantidadDeDias(mes){
//         let cantidadDeDias = 0;
//         switch(mes.toLowerCase()){
//                 case "enero":
//                 case "marzo":
//                 case "mayo":
//                 case "julio":
//                 case "agosto":
//                 case "octubre":
//                 case "diciembre":
//                         cantidadDeDias = 31;
//                         break;
//                 case "abril":
//                 case "junio":
//                 case "septiembre":
//                 case "noviembre":
//                         cantidadDeDias = 30;
//                         break;
//                 case "febrero":
//                         cantidadDeDias = 28;
//                         break;
//                 default:
//                         alert("No es un mes");
//         }
//         return cantidadDeDias;
// }

/*
Una función que reciba como parámetro un año y diga si ese año es bisiesto.
*/
// function esAñoBisiesto(año){
//         return año%4 == 0;
// }

/*
Una función que reciba el día, mes y año y me devuelva la cantidad de días de ese mes.
*/
// function diasDelMes(mes, año){
//         let cantidadDeDias = 0;
//         if(mes.toLowerCase() == "enero" || mes.toLowerCase() == "marzo" || mes.toLowerCase() == "mayo" || mes.toLowerCase() == "julio" || mes.toLowerCase() == "agosto" || mes.toLowerCase() == "octubre" || mes.toLowerCase() == "diciembre"){
//                 cantidadDeDias = 31;
//         }else if(mes.toLowerCase() == "abril" || mes.toLowerCase() == "junio" || mes.toLowerCase() == "septiembre" || mes.toLowerCase() == "noviembre"){
//                 cantidadDeDias = 30;
//         }else if(mes.toLowerCase() == "febrero" && año%4 != 0){
//                 cantidadDeDias = 28;
//         }else if(mes.toLowerCase() == "febrero" && año%4 == 0){
//                 cantidadDeDias = 29;
//         }else{
//                 alert("No es un mes")
//         }
//         return cantidadDeDias;
// }

/*
Una función que reciba día, mes y año y devuelva el día anterior
*/
// function diaAnterior(dia, mes, año){
//         let diaAnterior = 0;
//         if(dia == 1 && mes.toLowerCase() == "enero" || mes.toLowerCase() == "febrero" || mes.toLowerCase() == "abril" || mes.toLowerCase() == "junio" || mes.toLowerCase() == "agosto" || mes.toLowerCase() == "septiembre" || mes.toLowerCase() == "noviembre"){
//                 diaAnterior = 31
//         }else if(dia == 1 && mes.toLowerCase() == "mayo" || mes.toLowerCase() == "julio" || mes.toLowerCase() == "octubre" || mes.toLowerCase() == "diciembre"){
//                 diaAnterior = 30;
//         }else if(dia == 1 && mes.toLowerCase() == "marzo" && año%4 != 0){
//                 diaAnterior = 28;
//         }else if(dia == 1 && mes.toLowerCase() == "marzo" && año%4 == 0){
//                 diaAnterior = 29;
//         }else if(mes.toLowerCase() == "enero" || mes.toLowerCase() == "febrero" || mes.toLowerCase() == "abril" || mes.toLowerCase() == "junio" || mes.toLowerCase() == "agosto" || mes.toLowerCase() == "septiembre" || mes.toLowerCase() == "noviembre" || mes.toLowerCase() == "mayo" || mes.toLowerCase() == "julio" || mes.toLowerCase() == "octubre" || mes.toLowerCase() == "diciembre" || mes.toLowerCase() == "marzo"){
//                 diaAnterior = dia - 1;
//         }else{
//                 alert("No es un mes")
//         }
//         return diaAnterior;
// }
