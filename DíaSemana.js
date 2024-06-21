import prompt from 'prompt';

let díaSemana = prompt("Qué día de la semana es?");
if (díaSemana === "Sábado" || díaSemana === "Domingo") {
    alert("Buen fin de semana!");
} else {
    alert("Buena semana!");
}
