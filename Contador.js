/*1.
    Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
    Muestra cada número
*/

let contador = 1;
while (contador <= 10) {
    alert(`El valor de contador es ${contador}`);
    contador = contador + 1;
}

alert("Fin del código 1");

/*2.
    Crea un contador que comience en 10 y vaya hasta 1 usando un bucle 'while'. 
    Muestra cada número
*/

let contador2 = 10;
while (contador2 >= 1) {
    alert(`El valor de contador es ${contador2}`);
    contador2 = contador2 - 1;
}

alert("Fin del código 2");


/*3.
    Crea un programa de cuenta progresiva. 
    Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let numeroUsuario = prompt('Ingrese un número positivo');
let contador3 = 0;
while (contador3 <= numeroUsuario) {
    console.log(`El valor de contador es ${contador3}`);
    contador3 = contador3 + 1;
}

alert("Fin del código 3");

/*4.
    Crea un programa de cuenta regresiva. 
    Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador
*/

let contador4 = prompt('Ingrese un número positivo');

while (contador4 >= 0) {
    console.log(`El valor de contador es ${contador4}`);
    contador4 = contador4 - 1;
}

alert("Fin del código 4");
