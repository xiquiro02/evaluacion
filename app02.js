import { validarAcceso } from "./Modulos/ejercicio02";

export function ejer02()
{
    let edad = prompt("Ingresa la edad: ");
    let contraseña  = prompt("Ingresa la contraseña:");
    validarAcceso(edad, contraseña);
}