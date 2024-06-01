const leer = require("prompt-sync")();
const listaDeCodigosSecretos = ["R1dd13?", "?G4unt!", "H3l?ga!", "?R4vena", "N@9ini?"];
    const listaDeHorrocruxes = [
        "Diario de Tom Riddle",
        "Anillo de Gaunt",
        "Copa de Helga Hufflepuff",
        "Diadema de Rowena Ravenclaw",
        "Nagini (serpiente)"
    ];
    const MSJ_DE_BIENVENIDA = "......"
    const listaDeMsjs = [
        'Bien, enconstraste el'+listaDeHorrocruxes[0]+' 1er Horrocrux, ingresa un numero de -3 a 20. Para completar el codigo: '+ listaDeCodigosSecretos[0]+' y destruirlo',
        'Para destruir al' +listaDeHorrocruxes[1]+' ingresa un numero de -100 a -70. Para completar el codigo: '+listaDeCodigosSecretos[1]+' y eliminarlo',
        'Para destruir la ' +listaDeHorrocruxes[2]+' ingresa un numero de 4 a 12. Para completar el codigo: '+listaDeCodigosSecretos[2]+ ' y eliminarlo',
        'Para destruir la ' +listaDeHorrocruxes[3]+' ingresa un caracter de [a] a [e]. Para completar el codigo'+listaDeCodigosSecretos[3]+' y eliminarlo',
        'Para destruir el ' +listaDeHorrocruxes[4]+' ingresa un caracter de [h] a [k]. Para completar el codigo '+ listaDeCodigosSecretos[4]+ 'y eliminarlo'
    ];
    const listaNumMaximos=[-3,-100,4]
    const listaNumMinimos=[20,-70,12]
function main() {
    let numeroAleatorio= Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0] ) + listaNumMinimos[0]);
    // let caracterAleatorioEntreAyE = String.fromCharCode(Math.floor(Math.random() * (101 - 97)) + 97);
    // let caracterAleatorioEntreHyK = String.fromCharCode(Math.floor(Math.random() * (107 - 104)) + 104);

    console.log(MSJ_DE_BIENVENIDA);
    numeroAleatorio= Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0] ) + listaNumMinimos[0]);
    console.log(listaDeMsjs[0]);
    numeroIngresado = Number(leer());
    console.log('el nro aleatorio es: ',numeroAleatorio);// para yo saber 

    if (numeroIngresado==numeroAleatorio) {
        console.log("Muy bien");
    }
   


}


main();