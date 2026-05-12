/* Js del lado del servidor*/

console.log("Hola Mundo JS con Node")

/* Calculo */
let edad1 = 12
let edad2 = 34

console.log("Edad promedio: ")
console.log((edad1+edad2)/2)

/* Medir el tiempo del proceso */
console.time("miProceso")

for(let i=0; i<2000000; i++){
    // proceso pesado
}
console.timeEnd("miProceso")

/* Objetos tipo tabla */
let usuarios = [
    {nombre: "Brando", edad: 21},
    {nombre: "Andreu", edad: 21},
];
console.table(usuarios)
