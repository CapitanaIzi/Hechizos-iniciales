const leer = require("prompt-sync")();

/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y peligro. En este bosque, 
 * los temidos Dementores, criaturas de la oscuridad que se alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y los recuerdos alegres al igual que de una persona querida contra los Dementores. Pero ten cuidado, 
estos seres malignos no dudarán en atacarte y tratar de absorber tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente 
el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los Dementores y restaurar la paz 
en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores, pero solo uno a la vez, a menos que ocurra un número especial que permita atacar a los dos al mismo tiempo. 
Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */

const MSJ_DE_BIENVENIDA=`Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente 
el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.`
const DEF_NRO_INGRESADO=0
const PUNTOS_FELICIDAD_INI_JUGADOR= 1000
const PUNTOS_FELICIDAD_INI_COMPA= 1000
const VIDA_ENEMIGO=1000
function main() {
    let numeroIngresado =DEF_NRO_INGRESADO
let numerAleatorio=Math.floor(Math.random() * (4 - 0) + 0);
let vidaActualJugador=PUNTOS_FELICIDAD_INI_JUGADOR
let vidaActualCompa=PUNTOS_FELICIDAD_INI_COMPA
let vidaActualEnemigo= VIDA_ENEMIGO

    console.log(MSJ_DE_BIENVENIDA);
while (vidaActualJugador>=0 && vidaActualEnemigo>=0 ) {
    console.log("Defiendete ingresa un nro de 0 a 3");
    numeroIngresado = Number(leer());
if (numeroIngresado!=numerAleatorio) {
    vidaActualJugador= vidaActualJugador-100 
    console.log("Vida actual es:", vidaActualJugador);
}
if (vidaActualJugador<500 && numeroIngresado==numerAleatorio) {
    vidaActualEnemigo=vidaActualEnemigo-1000
    console.log("Ganaste, una misteriosa persona derroto a los Dementores");
}
}

}


main();