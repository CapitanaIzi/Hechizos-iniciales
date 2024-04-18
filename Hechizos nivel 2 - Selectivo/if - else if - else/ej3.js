const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen, en otro caso si trae una Valeriana se le otorgara el permiso
 */

const NOMBRE_PLANTA_1 = "Mandragora"
const NOMBRE_PLANTA_2 = "Valeriana"
const NOMBRE_PLANTA_3 = "Bubotuber"
const NOMBRE_PLANTA_4 = "Whomping Willow"
function main() {
    let plantaDelEstudiante ="Error"
        console.log("Escriba el nombre de la planta que encontró para determinar si es apta para el examen de Herbología");
    plantaDelEstudiante = leer();
    if (plantaDelEstudiante == NOMBRE_PLANTA_1 || plantaDelEstudiante == NOMBRE_PLANTA_2) {
        console.log("Si, son aptas");
    } else if (plantaDelEstudiante == NOMBRE_PLANTA_3 || plantaDelEstudiante == NOMBRE_PLANTA_4) {
        console.log("No son aptas porque son PELIGROSAS");
    } else {
        console.log("No es aceptada");
    }

}


main();