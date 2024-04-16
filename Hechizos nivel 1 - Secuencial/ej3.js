const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, 
 * luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */

const NOMBRE_ESCOBA= "Nimbus 2000"
const ELEMENTO_1_ESCOBA="Plumas de Fenix"
const PESO_DE_PLUMA=0.1 
const UNIDAD_DE_PESO="kg"
const DEF_PESO_BASE_ESCOBA=0
const DEF_CANTIDAD_PLUMAS=0
const DEF_PESO_TOTAL_ESCOBA=0
function main() {
    let pesoBaseEscoba= DEF_PESO_BASE_ESCOBA
    let cantidadPlumas=DEF_CANTIDAD_PLUMAS
    let pesoTotalEscoba=DEF_PESO_TOTAL_ESCOBA
    console.log("Harry ¿Cúal es el peso base de la", NOMBRE_ESCOBA,"? Ingresa el nro");
    pesoBaseEscoba=Number(leer());
    console.log("Tambien ingresa la cantidad de",ELEMENTO_1_ESCOBA,"utilizadas para su fabricación");
    cantidadPlumas=Number(leer());
    pesoTotalEscoba= cantidadPlumas*PESO_DE_PLUMA+pesoBaseEscoba
    console.log("El peso total de la",NOMBRE_ESCOBA,"es:",pesoTotalEscoba,UNIDAD_DE_PESO);

}


main();