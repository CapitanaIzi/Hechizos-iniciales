const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */

const NOM_INGREDIENTE_1= "Ojo de tigre"
const NOM_INGREDIENTE_2= "Raices de mandrágora"
const DEF_CANTIDAD_INGREDIENTES=0
const DEF_INGREDIENTES_TOTALES=0

function main() {
    let cantidadIngrediente1= DEF_CANTIDAD_INGREDIENTES
let cantidadIngrediente2= DEF_CANTIDAD_INGREDIENTES
let ingredientesTotales= DEF_INGREDIENTES_TOTALES
    cantidadIngrediente1 = pedirIngrediente1(cantidadIngrediente1);
    cantidadIngrediente2 = pedirIngrediente2(cantidadIngrediente2);
    ingredientesTotales = totalIngredientes(ingredientesTotales, cantidadIngrediente1, cantidadIngrediente2);
}


main();

function totalIngredientes(ingredientesTotales, cantidadIngrediente1, cantidadIngrediente2) {
    ingredientesTotales = cantidadIngrediente1 + cantidadIngrediente2;
    console.log("El total de los ingredientes son:", ingredientesTotales);
    return ingredientesTotales;
}

function pedirIngrediente2(cantidadIngrediente2) {
    console.log("Ingresa en nro cuantos de", NOM_INGREDIENTE_2, "quieres agregar.");
    cantidadIngrediente2 = Number(leer());
    return cantidadIngrediente2;
}

function pedirIngrediente1(cantidadIngrediente1) {
    console.log("Vamos hacer una poción. Para ello vamos a calcular los ingredientes necesarios. Pone en nro cuantos de", NOM_INGREDIENTE_1, "quieres poner.");
    cantidadIngrediente1 = Number(leer());
    return cantidadIngrediente1;
}