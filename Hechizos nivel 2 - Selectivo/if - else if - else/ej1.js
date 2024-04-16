const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */

const DEF_EDAD_CLIENTE = 0
function main() {
    let edadCliente = DEF_EDAD_CLIENTE

    console.log("Para comprar Varitas magicas ingresa el nro de tu edad");
    edadCliente = Number(leer());

    if (edadCliente >= 11) {
        console.log("Puedes comprar");
    } else {
        console.log("No puedes comprar");
    }
}


main();