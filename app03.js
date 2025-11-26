import { generarTabla } from "./Modulos/ejercicio03.js";

export function ejer03()
{
    // se inicializa una variable llamada numero y se asigna parseint el cual permite cambiar de texto a número entero. 
    let numero = parseInt(prompt("Ingrese el número: ")); 
    // se llama a la función generarTabla
    generarTabla(numero); 
}