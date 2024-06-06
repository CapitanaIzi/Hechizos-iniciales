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
    'Encontraste el ' + listaDeHorrocruxes[0] + ' 1er Horrocrux, ingresa un numero de -3 a 20. Para completar el codigo: ' + listaDeCodigosSecretos[0] + ' y destruirlo',
    'Encontraste al ' + listaDeHorrocruxes[1] + ' 2do Horrocrux, ingresa un numero de -100 a -70. Para completar el codigo: ' + listaDeCodigosSecretos[1] + ' y eliminarlo',
    'Encontraste la ' + listaDeHorrocruxes[2] + ' 3er Horrocrux, ingresa un numero de 4 a 12. Para completar el codigo: ' + listaDeCodigosSecretos[2] + ' y eliminarlo',
    'Encontraste la ' + listaDeHorrocruxes[3] + ' 4to Horrocrux, ingresa un caracter de [a] a [e]. Para completar el codigo' + listaDeCodigosSecretos[3] + ' y eliminarlo',
    'Encontraste el ' + listaDeHorrocruxes[4] + ' Ultimo Horrocrux, ingresa un caracter de [h] a [k]. Para completar el codigo ' + listaDeCodigosSecretos[4] + 'y eliminarlo'
];
const listaNumMaximos = [-3, -100, 4]
const listaNumMinimos = [20, -70, 12]
const PROBABILIDAD_DERROTA_INMEDIATA = 0.05
const AUMENTO_PROBABILIDAD_DERROTA0 = 0.024
const PROBABILIDAD_RECHAZO_DANIO = 0.50
const DISMINUCION_PROB_DE_RECHAZO = 0.11875
const DANIO_A_LA_CORDURA = 5.7
const DANIO_A_LA_SALUD = 10.4
const estudiante = {
    cordura: 200,
    salud: 400
}
function main() {
    let derrota = false
    let numeroAleatorio = 0
    let numeroIngresado = 0
    let i = 0
    let rechazo_danio = false

    console.log(MSJ_DE_BIENVENIDA);
    do {
        numeroAleatorio = destruir1();
        numeroIngresado = Number(leer());
        console.log('el nro aleatorio es: ', numeroAleatorio);// para yo saber 

        if (i >= 1) {
            derrota = probabilidadDerrota(derrota);
        }
        if (numeroIngresado !== numeroAleatorio) {
            disminuirCorduraSalud(DANIO_A_LA_CORDURA, DANIO_A_LA_SALUD)
            rechazo_danio = probabilidadDeRechazo(rechazo_danio)
            if (rechazo_danio == true) {
                protegerCorduraOsalud();
            }
            console.log("Sigue intentando destruir el Horrocrux");
        }
        i++;

    } while ( numeroAleatorio!=numeroIngresado && derrota == false && i <= 30 && (estudiante.cordura >= 0 || estudiante.salud >= 0));
   
    //console.log("Muy bien lo destruiste");
    
}
main();

function probabilidadDerrota(derrotaInmediata) {
    derrotaInmediata = Math.random() <= PROBABILIDAD_DERROTA_INMEDIATA;
    console.log("Te quitaron la cordura y salud totalmente ?", derrotaInmediata);
    return derrotaInmediata;
}
function disminuirCorduraSalud(DanioCordura, DanioSalud) {
    estudiante.cordura -= DanioCordura;
    estudiante.salud -= DanioSalud;
    console.log("Tu cordura ahora es: " + estudiante.cordura);
    console.log("Tu salud ahora es: " + estudiante.salud);
}

function probabilidadDeRechazo(rechazo_danio) {
    rechazo_danio = Math.random() <= PROBABILIDAD_RECHAZO_DANIO;
    console.log("Rechazaste danio ?", rechazo_danio);
    return rechazo_danio;
}
function protegerCorduraOsalud() {
    let opcionIngresada = "opcion ingresada"
    console.log("Tenes la posibilidad de proteger bien tu Cordura o tu Salud. Ingresa [c] para cordura y [s] para salud");
    opcionIngresada = leer();
    if (opcionIngresada == "c") {
        estudiante.cordura += DANIO_A_LA_CORDURA
        console.log("Tu cordura vuelve a ser:" + estudiante.cordura);
    } else if (opcionIngresada == "s") {
        estudiante.salud += DANIO_A_LA_SALUD
        console.log("Tu salud vuelve a ser:" + estudiante.salud);
    }

}
function destruir1() {
    let numeroAleatorio = Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0]) + listaNumMinimos[0]);
    numeroAleatorio = Math.floor(Math.random() * (6 - 1) + 1); //cambie los valores por mientras, para que pueda pasar al proximo, con los valores reales funciona bien todo.
    console.log("entre 6 y 1");
    return numeroAleatorio
}

function destruir2() {
    let numeroAleatorio = Math.floor(Math.random() * (listaNumMaximos[1] - listaNumMinimos[1]) + listaNumMinimos[1]);
    numeroAleatorio = Math.floor(Math.random() * (listaNumMaximos[1] - listaNumMinimos[1]) + listaNumMinimos[1]);
    console.log(listaDeMsjs[1]);
    return numeroAleatorio
}
function destruir3() {
    let numeroAleatorio = Math.floor(Math.random() * (listaNumMaximos[2] - listaNumMinimos[2]) + listaNumMinimos[2]);
    numeroAleatorio = Math.floor(Math.random() * (listaNumMaximos[2] - listaNumMinimos[2]) + listaNumMinimos[2]);
    console.log(listaDeMsjs[2]);

}
function destruir4() {
    let numeroIngresado = 0
    let caracterAleatorioEntreAyE = String.fromCharCode(Math.floor(Math.random() * (101 - 97)) + 97);
    caracterAleatorioEntreAyE = String.fromCharCode(Math.floor(Math.random() * (101 - 97)) + 97);
    console.log(listaDeMsjs[3]);

}
function destruir5() {
    let numeroIngresado = 0
    let caracterAleatorioEntreHyK = String.fromCharCode(Math.floor(Math.random() * (107 - 104)) + 104);
    caracterAleatorioEntreHyK = String.fromCharCode(Math.floor(Math.random() * (107 - 104)) + 104);
    console.log(listaDeMsjs[4]);

}