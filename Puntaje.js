import prompt from 'prompt';
let puntos = prompt('Ingrese el puntaje obtenido:');

let puntuaciónGanadora = 100;

console.log(puntos >= puntuaciónGanadora);

if (puntos >= puntuaciónGanadora) {
    alert('Felicidades, has ganado!')
} else if (puntos < 100) {
    alert('Inténtalo nuevamente para ganar')
}