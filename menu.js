import { ejer01 } from "./app01.js";
import { ejer02 } from "./app02.js";
import { ejer03 } from "./app03.js";
import { procesarImpuestos } from "./app04.js";
import { ejer05 } from "./app05.js";

let opcion = "";

while (opcion !== "0")
{
    opcion = prompt(`Menú\n
        0. Salir\n
        1. Ejercicio 1\n
        2. Ejercicio 2\n
        3. Ejercicio 3\n
        4. Ejercicio 4\n
        5. Ejercicio 5\n
        Ingresa una opción: `);
    
          switch (opcion) {

        case "1":
            ejer01();
            break;

        case "2":
            ejer02();
            break;

        case "3":
            ejer03();
            break;

        case "4":
            procesarImpuestos();
            break;

        case "5":
            ejer05();
            break;

        case "0":
            alert("Saliendo del menú...");
            break;

        default:
            alert("Opción no válida, intente de nuevo.");
            break;
    }  
}