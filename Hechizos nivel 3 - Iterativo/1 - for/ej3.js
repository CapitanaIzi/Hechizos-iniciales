const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta 
 * de los pasos para ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar una de las pociones más icónicas:
 *  la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite
 *  de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad
 *  correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y 
 * persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */
const NOMBRE_1_INGREDIENTE = "sanguijuelas reventadas"
const NOMBRE_2_INGREDIENTE = "pulverizado de cuerno de Bicornio"
const NOMBRE_3_INGREDIENTE = "pelo de gato negro"
const NOMBRE_4_INGREDIENTE = "colas de serpiente"
const CANTIDAD_INGREDIENTE_1 = 3
const CANTIDAD_INGREDIENTE_2 = 5
const CANTIDAD_INGREDIENTE_3 = 1
const CANTIDAD_INGREDIENTE_4 = 2

const CANTIDAD_UNIDADES_2_INGREDIENTE = 5
const MSJ_DE_BIENVENIDA = `Los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido.`
const PASO_1_INTRUCCIONES = "Agrega las 3 sanguijuelas reventadas a la caldera."
const PASO_2_INTRUCCIONES = "Agita la mezcla lentamente durante 30 segundos en dirección horaria. Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo."
const PASO_3_INTRUCCIONES = "Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto."
const PASO_4_INTRUCCIONES = "Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos. Deja que la poción repose durante 5 minutos antes de su uso."
const CANTIDAD_INTENTOS_INGREDIENTE_1 = 3
const CANTIDAD_INTENTOS_INGREDIENTE_2 = 4
const CANTIDAD_INTENTOS_INGREDIENTE_3 = 2
const CANTIDAD_INTENTOS_INGREDIENTE_4 = 1

function main() {
   let intentosDelIngrediente1 = "intento del ingrediente 1"
   let intentosDelIngrediente2 = "intento del ingrediente 2"
   let intentosDelIngrediente3 = "intento del ingrediente 3"
   let intentosDelIngrediente4 = "intento del ingrediente 4"

   console.log(MSJ_DE_BIENVENIDA);
   for (let i = 0; i < CANTIDAD_INTENTOS_INGREDIENTE_1; i++) {
      console.log(PASO_1_INTRUCCIONES);
      intentosDelIngrediente1 = Number(leer());
      if (intentosDelIngrediente1 == CANTIDAD_INGREDIENTE_1) {
         for (let i = 0; i < CANTIDAD_INTENTOS_INGREDIENTE_2; i++) {
            console.log(PASO_2_INTRUCCIONES);
            intentosDelIngrediente2 = Number(leer());
         }
      } else {
         console.log("Vuelve a estudiar ");
      }
   }
   if (intentosDelIngrediente2 == CANTIDAD_INGREDIENTE_2) {
      for (let i = 0; i < CANTIDAD_INTENTOS_INGREDIENTE_3; i++) {
         console.log(PASO_3_INTRUCCIONES);
         intentosDelIngrediente3 = Number(leer());
      }
   } else {
      console.log("Vuelve a estudiar ");
   }
   if (intentosDelIngrediente3 == CANTIDAD_INGREDIENTE_3) {
      for (let i = 0; i < CANTIDAD_INTENTOS_INGREDIENTE_4; i++) {
         console.log(PASO_4_INTRUCCIONES);
         intentosDelIngrediente4 = Number(leer());
      }
   } else {
      console.log("Vuelve a estudiar ");
   } if (intentosDelIngrediente4 == CANTIDAD_INGREDIENTE_4) {
      console.log("Muy bien terminaste toda la receta, ya hiciste la pocion");
      i = CANTIDAD_INTENTOS_INGREDIENTE_4 + 1
   }
}


main();