import { calcularImpuestoUnitario } from "./Modulos/ejecicio04";

export const procesarImpuestos = function()
{
    let valor, porcentaje;

    let cantidad = prompt("Ingrese la cantidad de productos:");
    for(let i = 0; i < cantidad; i++)
    {
        valor = prompt(`Ingrese el valor del producto ${i + 1}: `);
        porcentaje = prompt(`Ingrese el porcentaje del impusto: `);
    }
    calcularImpuestoUnitario(valor, porcentaje)
}