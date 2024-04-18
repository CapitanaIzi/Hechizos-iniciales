const leer = require("prompt-sync")();

/**
 * Ej 3
 * Permitir a los estudiantes lanzar hechizos mágicos utilizando un código numérico de 4 dígitos.

Instrucciones:

El programa solicitará al usuario que ingrese un código numérico de 4 dígitos.
Basado en el código ingresado, el programa determinará qué hechizo lanzar.
Utiliza la estructura de control switch para asociar cada código con un hechizo específico.
Si el código ingresado coincide con alguno de los códigos asignados, el programa mostrará el nombre del hechizo correspondiente.
Si el código no coincide con ninguno de los códigos asignados, el programa mostrará un mensaje indicando que el código es incorrecto.
El programa debe asegurarse de que el código ingresado sea un número entero de 4 dígitos.
Hechizos Disponibles:

Expecto Patronum
Wingardium Leviosa
Expelliarmus
Avada Kedavra
 */
const CODIGO_HECHIZO_1 = 1111
const CODIGO_HECHIZO_2 = 2222
const CODIGO_HECHIZO_3 = 3333
const CODIGO_HECHIZO_4 = 4444

const NOMBRE_HECHIZO_1 = "Expecto Patronum"
const NOMBRE_HECHIZO_2 = "Wingardium Leviosa"
const NOMBRE_HECHIZO_3 = "Expelliarmus"
const NOMBRE_HECHIZO_4 = "Avada Kedavra"
const DEF_MENSAJE = "El codigo es incorrecto"

function main() {
    let codigoNumericoIngresado = 0

    console.log("Ingrese un codigo numerico de 4 digitos");
    codigoNumericoIngresado = Number(leer());
    switch (codigoNumericoIngresado) {
        case CODIGO_HECHIZO_1:
            console.log(NOMBRE_HECHIZO_1);
            break;
        case CODIGO_HECHIZO_2:
            console.log(NOMBRE_HECHIZO_2);
            break;
        case CODIGO_HECHIZO_3:
            console.log(NOMBRE_HECHIZO_3);
            break;
        case CODIGO_HECHIZO_4:
            console.log(NOMBRE_HECHIZO_4);
            break;
        default:
            console.log(DEF_MENSAJE);
            break;
    }

}


main();