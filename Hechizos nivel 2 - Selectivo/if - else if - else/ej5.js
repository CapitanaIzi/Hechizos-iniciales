const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */

const LUGAR_DE_VISITA= "Hogsmeade"
const DEF_EDAD_ESTUDIANTE=0
function main() {
        let edadEstudiante= DEF_EDAD_ESTUDIANTE
        let permisoDePadres="Error"
        
        console.log("Ingrese la edad del estudiante");
        edadEstudiante=Number(leer());
        console.log("Ingrese[A] para afirmar que tiene permiso de los padres y [B] para caso contrario");
        permisoDePadres=leer();
        if ((edadEstudiante>=13 && permisoDePadres=="A") || edadEstudiante>=17) {
            console.log("SI puede visitar", LUGAR_DE_VISITA);
            
        } else{
            console.log("No puede visitar", LUGAR_DE_VISITA);
        }
}


main();