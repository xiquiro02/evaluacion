import { calcularImpuestoUnitario } from "./Modulos/ejecicio04.js";

export const procesarImpuestos = function()
{
    // se inicializa una variable y se le asigna parseint el cual permite cambiar de texto a número entero. 
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:")); 
    // se inicializa una varible llamada totalacumulado y se le asigna un valor. 
    let totalAcumulado = 0;
    // Se utiliza un ciclo repetivivo para pedirle al usuario el valor y el porcentaje 
    for(let i = 0; i < cantidad; i++)
    {
        // se inicializa una variable se le asigna parseFloat el cual permite cambiar de texto a número decimal. 
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}: `));
        // se inicializa una variable se le asigna parseFloat el cual permite cambiar de texto a número decimal.
        let porcentaje = parseFloat(prompt(`Ingrese el porcentaje del impusto: `));
        // se inicializa una variable y se le asigna la función calcular Impuesto Unitario y se envian los argumentos valor y porcentaje.
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);
        // se almacena el total del impuesto
        totalAcumulado += impuesto;
    }
    // imprime el resultado
    alert(`El impuesto: ${totalAcumulado}`);
}