const leer = require ("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. En la clase de 
 * Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. 
 * Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos 
 * para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. 
 * Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */
const NOMBRE_HECHIZO_1 = "Expecto Patronum"
const NOMBRE_HECHIZO_2 = "Wingardium Leviosa"
const NOMBRE_HECHIZO_3 = "Expelliarmus"

function main() {
    let nombreHechizoUsuario = "error"
    let cantidadDeIntentos = 4
let verificado=false

    for (let i = 0; i < cantidadDeIntentos; i++) {
        console.log("Escribe el nombre de un hechizo, tendras", cantidadDeIntentos, "de intentos");
        nombreHechizoUsuario = leer();
        if (((nombreHechizoUsuario == NOMBRE_HECHIZO_1) || nombreHechizoUsuario == NOMBRE_HECHIZO_2) || nombreHechizoUsuario == NOMBRE_HECHIZO_3) {
            console.log("Felicitaciones! Lo hiciste bien");
            i = cantidadDeIntentos 
            verificado=true
        } else {
            console.log("Vuelve intentar, te queda", cantidadDeIntentos - 1 - i, "de intentos");
        }
    }
    if (!verificado) { // ! es para negarlo
        console.log("Terminaste todos tus intentos. Estudia y vuelve a intentarlo");
    }
}

main();