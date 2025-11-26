export const generarTabla = (numero) => 
{
    // se incializa una variable llamada resultados y se le asigna un arreglo.
    let resultados = [];
    // Se utiliza un ciclo repetivivo para la el resultado de la multiplicación
    for(let i = 1; i <= 10; i++)
    {
        // se incializa una variable y se le asigna la opreción de la multiplicación 
        let resul = i * numero; 
        // se le agrega el resultado en el arreglo
        resultados.push(resul);
    }
    // Se utiliza un ciclo repetivivo para imprimir el resultado de la multiplicación
    for (let i = 0; i < 10; i++)
    {
        alert(`Tabla de multiplicar: ${i + 1} x ${numero} = ${resultados[i]}`);
    }
}