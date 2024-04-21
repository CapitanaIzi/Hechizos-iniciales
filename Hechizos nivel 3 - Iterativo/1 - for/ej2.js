const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Para protegerse de los Dementores,
 *  los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. En este ejercicio, simularemos un encuentro con un
 *  Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. Dependiendo de la cantidad de vida 
 * del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor 
 * consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces 
 * se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */
const NOMBRE_HECHIZO_CORRECTO = "Patronus"
const NOMBRE_ENEMIGO = "DEMENTOR"
const VIDA_MAXIMA_ENEMIGA = 1000
const VIDA_MAXIMA_ESTUDIANTE = 350
const DANIO_X_TURNO_AL_ESTUDIANTE = 75
const DANIO_AL_ENEMIGO_POR_HECHIZO = 267

const MSJ_DE_BIENVENIDA = `Protegete de los Dementores, estas son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. 
Que bueno que estas aprendiendo el hechizo Patronus, este repele a estas criaturas y los aleja con recuerdos felices. Si no ingresas el hechizo correctamente, perderás turnos y el Dementor 
consumirá tu felicidad y recuerdos felices, acercándote más a la derrota. Tu vida maxima inicial es de:`

function main() {
    let hechizoLanzadoEstudiante = "error"
    let vidaActualEnemigo = VIDA_MAXIMA_ENEMIGA
    let vidaActualEstudiante = VIDA_MAXIMA_ESTUDIANTE
    let cantidadIntentos = 8 //con 5 de cantidad el estudiante puede equivocarse 1 vez.Con 8 puede jugar mas
    console.log(MSJ_DE_BIENVENIDA);

    for (let i = 0; i < cantidadIntentos; i++) {
        console.log("Ingresa el hechizo; Turnos totales:", cantidadIntentos);
        hechizoLanzadoEstudiante = leer();
        if (hechizoLanzadoEstudiante == NOMBRE_HECHIZO_CORRECTO) {
            vidaActualEnemigo = vidaActualEnemigo - DANIO_AL_ENEMIGO_POR_HECHIZO
            console.log("Lo estas haciendo muy bien.", NOMBRE_ENEMIGO, "tiene de vida:", vidaActualEnemigo);
            if (vidaActualEnemigo < 0) {
                i = cantidadIntentos + 1
                console.log("Muy bien Derrotaste al", NOMBRE_ENEMIGO);
            }
        } else {
            vidaActualEstudiante = vidaActualEstudiante - DANIO_X_TURNO_AL_ESTUDIANTE
            console.log("Tu vida actual es:", vidaActualEstudiante, "recibiste un daño de:", DANIO_X_TURNO_AL_ESTUDIANTE/*, "Perdes 1 turno ahora tenes", cantidadIntentos - 2 - i*/);
            if (vidaActualEstudiante < 0) {
                i = cantidadIntentos + 1
                console.log("Game over, perdiste");
            }
            /*if (vidaActualEstudiante-DANIO_X_TURNO_AL_ESTUDIANTE) {
               i=i+1
            }*/
        }

    }
    /*if (vidaActualEstudiante<0){
        console.log("Game over, perdiste");
    }*/
}
main();