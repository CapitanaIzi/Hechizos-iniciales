const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */

const POCION_1="Felix Felicis"
const POCION_2="Polvo de Flu"
const POCION_3="Pocion Multijugos"
const NIVEL_DIFICULTAD_POCION_1= "Es extremadamente compleja y peligrosa"
const NIVEL_DIFICULTAD_POCION_2= "Es compleja, pero útil en la red de transportación"
const NIVEL_DIFICULTAD_POCION_3= "Es complicada, pero muy útil para transformaciones temporales"

function main() {
    let nombrePocionUsuario="error"
    
    console.log("Escriba el nombre de una pocion");
     nombrePocionUsuario=leer()
     switch (nombrePocionUsuario) {
        case POCION_1:
            console.log(NIVEL_DIFICULTAD_POCION_1);
            break;
            case POCION_2:
            console.log(NIVEL_DIFICULTAD_POCION_2);
            break;
            case POCION_3:
            console.log(NIVEL_DIFICULTAD_POCION_3);
            break;
     
        default://ES COMO EL ELSE
        console.log("No tenemos información sobre esa poción en nuestros registros");
            break;
     }
    
}


main();