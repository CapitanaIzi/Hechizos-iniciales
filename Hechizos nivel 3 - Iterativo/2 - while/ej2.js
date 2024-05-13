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

const MSJ_DE_BIENVENIDA = `Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente 
el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.`
const DEF_NRO_INGRESADO = 0;
const PUNTOS_FELICIDAD_INICIALES = 1000;
const PROBABILIDAD_PERS_MISTERIOSA = 0.25;
const NRO_MAYOR = 4;
const NRO_MINIMO = 0;
const NRO_DANIO = 50
function main() {
    let numeroIngresado = DEF_NRO_INGRESADO
    let numerAleatorio = Math.floor(Math.random() * (NRO_MAYOR - NRO_MINIMO) + NRO_MINIMO);
    let vidaActualJugador = PUNTOS_FELICIDAD_INICIALES
    let vidaActualCompa = PUNTOS_FELICIDAD_INICIALES
    let personaMisteriosa = false
    let nroParaPersMisteriosa = 5
    let i = 0
    let ataqueAlJugador = true

    console.log(MSJ_DE_BIENVENIDA);
    while (vidaActualJugador >= 1 && vidaActualCompa >= 1 && !personaMisteriosa) {
        ({ numerAleatorio, numeroIngresado } = generar(numerAleatorio, numeroIngresado));
        if (numerAleatorio == 3) {
            vidaActualJugador = actualizarVida(vidaActualJugador);
            vidaActualCompa = actualizarVida(vidaActualCompa);
            console.log("Los ataco a ambos. Ahora Tu vida actual es:", vidaActualJugador, "Y la vida actual de tu compañero es:", vidaActualCompa);
        } else if (numeroIngresado != numerAleatorio && ataqueAlJugador) {
            vidaActualJugador = actualizarVida(vidaActualJugador);
            console.log("Te ataco a vos. Tu vida actual es:", vidaActualJugador);
        } else if (numeroIngresado == numerAleatorio) {
            console.log(" Muy bien haz defendido");
        } else {
            vidaActualCompa = actualizarVida(vidaActualCompa);
            console.log("Le ataco a tu compañero. Ahora su vida es:", vidaActualCompa);
        } if (i >= nroParaPersMisteriosa) {
            personaMisteriosa = probabilidad(personaMisteriosa);
        }
        i++;
        ataqueAlJugador = !ataqueAlJugador;
    } if (personaMisteriosa) {
        console.log("Ganaste, una misteriosa persona derroto a los Dementores");
    } else {
        console.log("Perdiste");
    }

}

main();
function generar(numerAleatorio, numeroIngresado) {
    numerAleatorio = Math.floor(Math.random() * (NRO_MAYOR - NRO_MINIMO) + NRO_MINIMO);
    console.log("Defiendete ingresa un nro de 0 a 3");
    numeroIngresado = Number(leer());
    return { numerAleatorio, numeroIngresado };
}
function actualizarVida(vidaActual) {
    vidaActual = vidaActual - NRO_DANIO;
    return vidaActual;
}
function probabilidad(aparecioPersonaMisteriosa) {
    aparecioPersonaMisteriosa = Math.random() <= PROBABILIDAD_PERS_MISTERIOSA;
    console.log("¿Alguien nos vino a ayudar?", aparecioPersonaMisteriosa);
    return aparecioPersonaMisteriosa;
}