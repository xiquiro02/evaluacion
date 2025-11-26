import { validarAcceso } from "./Modulos/ejercicio02.js";

export function ejer02()
{
    // se inicializa una variable llamada edad y se le asigna parseint el cual permite cambiar de texto a número entero. 
    let edad = parseInt(prompt("Ingresa la edad: ")); 
    // se inicializa una variable llamada contrasena y se le asigna parseint el cual permite cambiar de texto a número entero. 
    let contrasena  = parseInt(prompt("Ingresa la contraseña:"));
    // se inicializa una variable llamada acceso y se le asigna el resultado de la función validarAcceso.
    let acceso = validarAcceso(edad, contrasena); 
    alert(acceso); // imprime resultado
}