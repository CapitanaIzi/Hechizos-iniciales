const leer = require("prompt-sync")();

/**
 * Ej 2
 * Elección de Varita Mágica:
 * Pide al estudiante el núcleo de una varita mágica y muestra un mensaje personalizado dependiendo del tipo de núcleo.
 * Fénix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.
 * Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.
 * Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.
 * Cualquier otro tipo de nucleo - No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.
 */


const NOMBRE_DE_NUCLEO_1 = "Fenix"
const NOMBRE_DE_NUCLEO_2 = "Unicornio"
const NOMBRE_DE_NUCLEO_3 = "Dragon"
const INFORMACION_DE_NUCLEO_1 = "¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales."
const INFORMACION_DE_NUCLEO_2 = "Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza."
const INFORMACION_DE_NUCLEO_3 = "¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales."
const DEF_MENSAJE = "No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido."


function main() {
    let nombreNucleoEstudiante = "error"

    console.log("Escriba el nucleo de una varita magica");
    nombreNucleoEstudiante = leer();
    switch (nombreNucleoEstudiante) {
        case NOMBRE_DE_NUCLEO_1:
            console.log(INFORMACION_DE_NUCLEO_1);
            break;
        case NOMBRE_DE_NUCLEO_2:
            console.log(INFORMACION_DE_NUCLEO_2);
            break;
        case NOMBRE_DE_NUCLEO_3:
            console.log(INFORMACION_DE_NUCLEO_3);
            break;
        default:
            console.log(DEF_MENSAJE);
            break;
    }

}


main();