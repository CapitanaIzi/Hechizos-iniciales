const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. 
 * La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */
const DEF_EDAD_MAGO = 0
const DEF_CANT_DIAS_PRACTICADO = 0
const DEF_POTENCIA_HECHIZO = 0
const NOMBRE_HECHIZO = "Hechizo Patronus"
function main() {
    let edadMago = DEF_EDAD_MAGO
    let cantidadDiasPracticas = DEF_CANT_DIAS_PRACTICADO
    let potenciaHechizo = DEF_POTENCIA_HECHIZO
    console.log("Ingrese la edad del Mago");
    edadMago = Number(leer());
    console.log("Ingrese el nro de dias de practicas del", NOMBRE_HECHIZO);
    cantidadDiasPracticas = Number(leer());
    potenciaHechizo = (2 * edadMago) + (cantidadDiasPracticas / 2)
    console.log("La potencia del", NOMBRE_HECHIZO, "es:", potenciaHechizo);
}


main();