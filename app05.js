import { buscarElemento } from "./Modulos/ejecicio05";

    let lista = ["Hola", 1, "Chao", 5, 7, "Binevenido"];
    let cantidad = prompt("Ingrese la cantidad de elementos: ");

    for(let i = 0; i < cantidad; i++)
    {
        let elemento = prompt("Ingrese el elemnto a buscar: ");
        buscarElemento(elemento, lista, cantidad);
    }