const prompt = require('prompt-sync')();
const numero = prompt('Introduce un número:');

if (numero > 0) {
    console.log('El número es positivo');
} else if (numero < 0) {
    console.log('El número es negativo');
}
