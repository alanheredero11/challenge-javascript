/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


/* INTENTO */

// let first50FibonaccioNumbers = [];

// while(first50FibonaccioNumbers.length < 50) {
//     if(first50FibonaccioNumbers.length == 0) {
//         first50FibonaccioNumbers.push(0)
//     } 
//     if(first50FibonaccioNumbers.length == 1) {
//         first50FibonaccioNumbers.push(1)
//     }
//     if(first50FibonaccioNumbers.length > 1) {
//         first50FibonaccioNumbers.push(getFibonacciNumber())
//     }
// }
// console.log(first50FibonaccioNumbers)
// function getFibonacciNumber() {
//     return first50FibonaccioNumbers[first50FibonaccioNumbers.length - 2] + first50FibonaccioNumbers[first50FibonaccioNumbers.length -1]
// }


/* SOLUCION */

let first50FibonaccioNumbers = []

let n0 = 0;
let n1 = 1;

while(first50FibonaccioNumbers.length < 50) {
    first50FibonaccioNumbers.push(n0); 
    
    let value = n0 + n1; 
    n0 = n1; 
    n1 = value
}

console.log("first50FibonaccioNumbers: ", first50FibonaccioNumbers)


/* 

CONCLUSION 

Con la solucion simplificamos el codigo enormemente a diferencia del primer intento, con 5 lineas de codigo resolvemos el problema. 
Aunque se haya llegado al mismo resultado, no es necesario el uso de condicionales dentro del while si hacemos push del los numeros de la manera
en la que se muestra en la solución.

*/
