/*Ejercicio 1: Calcula el doble de un número 
Enunciado: 
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
escribir un programa en JavaScript que: 
1. Solicite al usuario que ingrese un número cualquiera. 
2. Calcule el doble de ese número. 
3. Muestre el resultado en la consola. 
Requisitos: 
• Utiliza la función prompt() para solicitar el dato al usuario. 
• Almacena el número ingresado en una variable. 
• Utiliza un operador aritmético para calcular el doble del número.*/

console.log ("hola")

const prompt = require("prompt-sync")();

//pedir al usuario que ingrese un numero al azar


let numero1 = parseFloat(prompt("Ingresa un número al azar: "));

//calcular el doble de ese número

let doble = numero1 * 2;

//se muestra el resultado en consola
console.log (`El doble del ${numero1} es: ${doble}`);
