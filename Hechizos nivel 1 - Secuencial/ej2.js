const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */
const DEF_LIBROS_A_USAR = 0
const DEF_CANTIDAD_VARITAS = 0
const DEF_INGREDIENTES_TOTALES = 0

function main() {
    let librosAusar = DEF_LIBROS_A_USAR
    let cantidadVaritas = DEF_CANTIDAD_VARITAS
    let ingredientesTotales = DEF_INGREDIENTES_TOTALES
    console.log("Para saber el total de ingredientes necesarios, ingrese el numero total de varitas que tengan, ya que los estudiantes que no tienen varitas no pueden participar");
    cantidadVaritas= Number(leer());
    console.log("Ingrese cuantos libros van a usar");
    librosAusar = Number(leer());
    ingredientesTotales = (cantidadVaritas * 3) + (2 * librosAusar)
    console.log("El total de ingredientes a usar es:", ingredientesTotales);
}
main();