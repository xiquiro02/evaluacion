export function calcularImpuestoUnitario(valor, porcentaje)
{
    // se inicaliza una variable y se le asigna la operación
    let impuesto = valor * (porcentaje / 100);
    // retorna el resultado de impuesto
    return impuesto; 
}