import { calcularPromedio } from "./Modulos/ejercicio01.js"; 

export function ejer01()
{   // Se inicializa una variable llamada ingresarCant y se le asigna parseint el cual permite cambiar de texto a número entero. 
    let ingreseCant = parseInt(prompt("Ingresa la cantidad de notas: "));
    // Se inicializa una variable llamada natos la cual se le asigna un arreglo
    let notas = []; 
    // Se utiliza un ciclo repetivivo para pedirle al usuario las notas.
    for (let i = 0; i < ingreseCant; i++)
    {
        // se inicializa una variable llamada nota y se le asigna parseint el cual permite cambiar de texto a número entero. 
        let nota = parseFloat(prompt(`Ingrese su nota ${i + 1}:`)); 
        notas.push(nota); // se almacena en el arreglo la nota que sele solocito al usuario.
    }
    
    calcularPromedio(notas); // se le envia el argumento notas a la funcion caclcularPromedio. 
}