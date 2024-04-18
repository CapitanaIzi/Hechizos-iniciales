const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */

const DEF_NIVEL_lEALTAD=0
const DEF_NIVEL_ASTUCIA=0

function main() {
    let nivelLealtad=DEF_NIVEL_lEALTAD
    let nivelAstucia=DEF_NIVEL_ASTUCIA
    console.log("Ingrese el nro de nivel Lealtad de la varita");
    nivelLealtad=Number(leer());
    console.log("Ingrese el nro de nivel Astucia de la varita");
    nivelAstucia=Number(leer());
    if (nivelLealtad>=70 ||nivelAstucia>=80) {
        console.log("La varita es apta");
    } else {
        console.log("No es apta");
    }

}


main();