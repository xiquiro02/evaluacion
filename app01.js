import { calcularPromedio } from "./Modulos/ejercicio01";

    let ingreseCant = prompt("Ingresa la cantidad de notas: ");

    let notas = [];

    for (let i = 0; i < ingreseCant; i++)
    {
        let nota = prompt(`Ingrese su nota ${i + 1}:`);
        notas.push(nota);
    }
    
    calcularPromedio(notas);