const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */

const NOMBRE_CASA_1="Gryffindor"
const NOMBRE_CASA_2="Hufflepuff"
const NOMBRE_CASA_3="Ravenclaw"
const NOMBRE_CASA_4="Slytherin"
const DEF_PUNTUACION_EXAMEN=0
function main() {
    let puntuacionExamen=DEF_PUNTUACION_EXAMEN

    console.log("Ingrese su puntuacion de examen");
    puntuacionExamen=Number(leer());

    if (puntuacionExamen>=90) {
        console.log("Perteneceras a la casa", NOMBRE_CASA_1);
    } else if (puntuacionExamen>=70) {
        console.log("Perteneceras a la casa", NOMBRE_CASA_2);
    } else if (puntuacionExamen>=50) {
        console.log("Perteneceras a la casa", NOMBRE_CASA_3);
    } else if (puntuacionExamen<50) {
        console.log("Perteneceras a la casa", NOMBRE_CASA_4);
    }
    
}


main();