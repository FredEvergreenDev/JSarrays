//  Ejercicio 1 Declaramos arreglo

let numerosAzar = [];
// Generar 10 números al azar y guardarlos en el array
for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100); // Número al azar entre 0 y 99
    numerosAzar.push(numero);
}
console.log(numerosAzar);

// Ejercicio 2 varias palabras separadas por coma

let palabras = prompt("Ingresa varias palabras o números separados por coma:");
// Convertir 
let presentacion = palabras.split(',');
console.log(presentacion)

//Ejercicio 3

let numerosMenorMayor = [10, 40, 30, 20, 15, 5];
// Ordenar el arreglo de menor a mayor
numerosMenorMayor.sort((a, b) => a - b);
// el número menor y el número mayor
let numeroMenor = Math.min(...numerosMenorMayor);
let numeroMayor = Math.max(...numerosMenorMayor);
// Mostrar resultados
console.log("Numeros ordenados de menor a mayor:", numerosMenorMayor);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);

