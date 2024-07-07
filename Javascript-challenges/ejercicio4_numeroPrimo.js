/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


/* INTENTO */

function checkPrimeNumber(number) {
    let i = 2;
    let result = true;
    while(i < number) {
        if(number % i == 0) {
            result = false
        }
        i++;
    }
    return result;
}

for(let i = 2; i < 100; i++) {
    if(checkPrimeNumber(i)) {
        console.log(i)
    }
}


/* SOLUCION 

La solucion es igual al intento

*/



/* 

CONCLUSION 


*/
