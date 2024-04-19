const leer = require ("prompt-sync")();

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
const NOMBRE_ENEMIGO= "DEMENTOR"
const VIDA_MAXIMA_ENEMIGA = 1000
const VIDA_MAXIMA_ESTUDIANTE = 350
const DAÑO_X_TURNO_AL_ESTUDIANTE = 75
const DAÑO_AL_ENEMIGO_POR_HECHIZO = 267
const TURNO_TOTALES = 5
const MSJ_DE_BIENVENIDA = "Protegete de los Dementores, estas son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. Que bueno que estas aprendiendo el hechizo Patronus, este repele a estas criaturas y los aleja con recuerdos felices"
const MSJ_DE_EXPLICACION = "Si no ingresas el hechizo correctamente, perderás turnos y el Dementor consumirá tu felicidad y recuerdos felices, acercándote más a la derrota. Tu vida maxima inicial es de:"

function main() {
    let hechizoLanzadoEstudiante = "error"
    let vidaActualEnemigo= "vida actual enemigo"
    let vidaActualEstudiante= "vida actual del estudiante"
    console.log(MSJ_DE_BIENVENIDA);
    console.log(MSJ_DE_EXPLICACION, VIDA_MAXIMA_ESTUDIANTE);
    for (let i = 0; i < TURNO_TOTALES; i++) {
        console.log("Ingresa el hechizo; Turnos totales son:", TURNO_TOTALES);
        hechizoLanzadoEstudiante = leer();
        if (hechizoLanzadoEstudiante == NOMBRE_HECHIZO_CORRECTO) {
            vidaActualEnemigo=VIDA_MAXIMA_ENEMIGA-DAÑO_AL_ENEMIGO_POR_HECHIZO
            console.log("Lo estas haciendo muy bien",NOMBRE_ENEMIGO, "tiene de vida:",vidaActualEnemigo);
        } else {
            vidaActualEstudiante = VIDA_MAXIMA_ESTUDIANTE - DAÑO_X_TURNO_AL_ESTUDIANTE
            console.log("Tu vida actual es:", vidaActual, "recibiste un daño de:", DAÑO_X_TURNO_AL_ESTUDIANTE);
        }
    }
}

main();