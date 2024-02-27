// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let array = [];
for (let index = 0; index < 10; index++) {
    let numeroAleatorioEntre1Y10 = Math.floor(Math.random() * (11));
    array.push(numeroAleatorioEntre1Y10);    
}
console.log(array);

/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado. */

let palabras = prompt("Ingresa varias palabras separadas por comas");
let arrayPalabras = palabras.split(",");
console.log(arrayPalabras);
console.log(arrayPalabras.lengt);

/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.  */
                        
let arrayMenorMayor = [10,40,30,20,15,5];
arrayMenorMayor.sort((a,b) => a-b );
console.log(arrayMenorMayor);

let maximo = Math.max(...arrayMenorMayor);
let minimo = Math.min(...arrayMenorMayor);

console.log("Maximo: " + maximo);
console.log("Mínimo: " + minimo);