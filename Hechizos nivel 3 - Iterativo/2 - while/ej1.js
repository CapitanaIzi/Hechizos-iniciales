const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus 
 * habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, 
lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort
 son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */
const VIDA_INICIAL_JUGAADOR = 1000
const VIDA_INICIAL_ENEMIGA = 1000
const DANIO_X_TURNO_AL_ESTUDIANTE = 100
const DANIO_AL_ENEMIGO_POR_HECHIZO_1 = 200
const DANIO_AL_ENEMIGO_POR_HECHIZO_2 = 100
const DANIO_AL_ENEMIGO_POR_HECHIZO_3 = 50

const MSJ_DE_BIENVENIDA = `Ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, 
lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.`
function main() {
    let numeroIngresado = 0
    let numeroDeHechizo = Math.floor(Math.random() * (3 - 1) + 1);
    let vidaActualEnemigo = 0
    console.log(MSJ_DE_BIENVENIDA);
    console.log("Ataca. Ingresa un nro entre 1 y 3");
    numeroIngresado = Number(leer());
    if (numeroIngresado == numeroDeHechizo && numeroDeHechizo == 1) {
        vidaActualEnemigo = VIDA_INICIAL_ENEMIGA - DANIO_AL_ENEMIGO_POR_HECHIZO_1
        console.log("Bien acertastes,vida actual del enemigo es: ", vidaActualEnemigo, "random", numeroDeHechizo);
    } else if (numeroIngresado == numeroDeHechizo && numeroDeHechizo == 2) {
        vidaActualEnemigo = VIDA_INICIAL_ENEMIGA - DANIO_AL_ENEMIGO_POR_HECHIZO_2
        console.log("Bien acertastes,vida actual del enemigo es: ", vidaActualEnemigo, "random", numeroDeHechizo);
    } else if (numeroIngresado == numeroDeHechizo && numeroDeHechizo == 3) {
        vidaActualEnemigo = VIDA_INICIAL_ENEMIGA - DANIO_AL_ENEMIGO_POR_HECHIZO_3
        console.log("Bien acertastes,vida actual del enemigo es: ", vidaActualEnemigo, "random", numeroDeHechizo);
    }
    else {
        console.log("random", numeroDeHechizo);
    }

}


main();