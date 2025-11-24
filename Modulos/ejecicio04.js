export function calcularImpuestoUnitario(valor, porcentaje)
{
    let porcentajeFinal =  porcentaje * 100.0; 
    let totalFinal = valor * porcentajeFinal;
    return totalFinal;
}