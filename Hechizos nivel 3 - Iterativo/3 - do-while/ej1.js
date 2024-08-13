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


const DANIO_A_LA_CORDURA = 5.7
const DANIO_A_LA_SALUD = 10.4
const estudiante = {
    cordura: 200,
    salud: 400

}
const DEF_NRO_INGRESADO=0
const DEF_CODIGO_ALEATORIO=0
const DEF_CONTADOR=0
const DEF_CONTADOR_CONDICIONAL=0
const DEF_PROBA_RECHAZO=0
const DEF_PROB_INICIAL=0




const MSJ_FINAL_VICTORIA = "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!"
const MSJ_FINAL_DERROTA = "En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria."

function main() {
   
    let derrota = false;
    let codigoAleatorio = DEF_CODIGO_ALEATORIO;
    let numeroIngresado = DEF_NRO_INGRESADO;
    let contador = DEF_CONTADOR;
    let contadorCondicional = DEF_CONTADOR_CONDICIONAL;
    let rechazoDanio = false;
    let horrocruxes = [false, false, false, false, false];
    let generarNumeroAleatorio = [destruir1, destruir2, destruir3, destruir4, destruir5];
    let maxIntentos = 30;
    let probabilidadRechazoDanio =DEF_PROBA_RECHAZO;
    let probabilidadInicial= DEF_PROB_INICIAL;
    console.log(MSJ_DE_BIENVENIDA);
    do {
        contador++;
        if (contador > 1) {
            probabilidadInicial= calcularProbabilidadDerrota(contadorCondicional);
            derrota=probabilidadDerrota(probabilidadInicial);
            console.log(`la probabilidad de derrota es de: ${probabilidadInicial}`);
            if (derrota=== true) {
               console.log("fin");
               
                break; 
              }
            
        }
        codigoAleatorio = generarNumeroAleatorio[contadorCondicional]();
        numeroIngresado = Number(leer());
        console.log('el nro aleatorio es: ', codigoAleatorio);// para yo saber 
        if (numeroIngresado == codigoAleatorio) {
            horrocruxes[contadorCondicional] = true;
           
            console.log(`Horrocruxe ${contadorCondicional + 1} destruido.`);
            contadorCondicional++;
            
        } else {
            disminuirCorduraSalud(DANIO_A_LA_CORDURA, DANIO_A_LA_SALUD);
            probabilidadRechazoDanio = calcularProbabilidadRecha(contadorCondicional);
            rechazoDanio = probabilidadDeRechazo(rechazoDanio);
            console.log(`la probabilidad de rechazo es de:${probabilidadRechazoDanio}`);
            if (rechazoDanio == true) {
                protegerCorduraOsalud();
            }
            console.log("Sigue intentando destruir el Horrocrux");
        }
        console.log(`ese fue tu intento nro`, contador);// para yo saber
    } while (derrota == false && contador < maxIntentos && (estudiante.cordura >= 0 || estudiante.salud >= 0) && contadorCondicional < horrocruxes.length);
    if (contadorCondicional == horrocruxes.length) {
        console.log(MSJ_FINAL_VICTORIA);
    } else {
        console.log(MSJ_FINAL_DERROTA);
    }

}
main();
function calcularProbabilidadDerrota(contadorCondicional) {
    const probabilidadInicialDerrota = 0.05;
    const AUMENTO_PROBABILIDAD_DERROTA = 0.024;
    return  probabilidadInicialDerrota + (contadorCondicional * AUMENTO_PROBABILIDAD_DERROTA);
  }
function calcularProbabilidadRecha(contadorCondicional) {
  const probabilidadInicial = 0.5;
  const DISMINUCION_PROB_DE_RECHAZO = 0.11875;
  return probabilidadInicial - (contadorCondicional * DISMINUCION_PROB_DE_RECHAZO);
}

function disminuirCorduraSalud(DanioCordura, DanioSalud) {
    estudiante.cordura -= DanioCordura;
    estudiante.salud -= DanioSalud;
    console.log("Tu cordura ahora es: " + estudiante.cordura);
    console.log("Tu salud ahora es: " + estudiante.salud);
}

function probabilidadDeRechazo(rechazo_danio,probabilidadRechazoDanio) {
    rechazo_danio = Math.random() <= probabilidadRechazoDanio;
    console.log("Rechazaste danio ?", rechazo_danio);
    return rechazo_danio;
}
function probabilidadDerrota(probabilidadInicial) {
   let derrotaInmediata =Math.random() <=probabilidadInicial;
    console.log("Te derrotaron inmediatamente?", derrotaInmediata);
    return derrotaInmediata;
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
    let codigoAleatorio = Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0]) + listaNumMinimos[0]);
    codigoAleatorio = Math.floor(Math.random() * (6 - 1) + 1); //cambie los valores por mientras, para que pueda pasar al proximo, con los valores reales funciona bien todo.
    console.log("entre 6 y 1");
    return codigoAleatorio;
}

function destruir2() {
    let codigoAleatorio = Math.floor(Math.random() * (listaNumMaximos[1] - listaNumMinimos[1]) + listaNumMinimos[1]);
    codigoAleatorio = Math.floor(Math.random() * (6 - 1) + 1);
    console.log(listaDeMsjs[1]);
    return codigoAleatorio;
    //(listaNumMaximos[1] - listaNumMinimos[1]) + listaNumMinimos[1]);
}
function destruir3() {
    let codigoAleatorio = Math.floor(Math.random() * (listaNumMaximos[2] - listaNumMinimos[2]) + listaNumMinimos[2]);
    codigoAleatorio = Math.floor(Math.random() * (6 - 1) + 1);
    console.log(listaDeMsjs[2]);
    return codigoAleatorio;
    //listaNumMaximos[2] - listaNumMinimos[2]) + listaNumMinimos[2]
}
function destruir4() {
    let codigoAleatorio = Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0]) + listaNumMinimos[0]);
    codigoAleatorio = Math.floor(Math.random() * (6 - 1) + 1);
    //let codigoAleatorioEntreAyE = String.fromCharCode(Math.floor(Math.random() * (101 - 97)) + 97);
    //codigoAleatorioEntreAyE = String.fromCharCode(Math.floor(Math.random() * (101 - 97)) + 97);
    console.log(listaDeMsjs[3]);
    return codigoAleatorio;

}
function destruir5() {
    let codigoAleatorio = Math.floor(Math.random() * (listaNumMaximos[0] - listaNumMinimos[0]) + listaNumMinimos[0]);
    codigoAleatorio = Math.floor(Math.random() * (6 - 1) + 1);
    //let codigoAleatorioEntreHyK = String.fromCharCode(Math.floor(Math.random() * (107 - 104)) + 104);
    //codigoAleatorioEntreHyK = String.fromCharCode(Math.floor(Math.random() * (107 - 104)) + 104);
    console.log(listaDeMsjs[4]);
    return codigoAleatorio;

}