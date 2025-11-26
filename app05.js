import { buscarElemento } from "./Modulos/ejecicio05.js";

export function ejer05()
{
    let lista = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de elementos: "));

    for(let i = 0; i < cantidad; i++)
    {
        let valor = prompt(`Ingrese el elemento para la lista ${i + 1}: `);
        lista.push(valor);
    }

    let elemento = prompt("Ingrese el elemento a buscar: ");
    let encontrado = buscarElemento(lista, elemento);

    if(encontrado)
    {
        alert(`El elemento "${elemento}" SÍ esta en la lista.`)
    }
    else
    {
        alert(`El elemento "${elemento}" NO esta en la lista.`);
    }
}