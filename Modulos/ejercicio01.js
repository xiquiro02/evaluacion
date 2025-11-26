
export function calcularPromedio(notas) 
{
    let suma = 0; // Se inicializa la variable suma y se le asigna un valor que es cero.
    // Se utiliza un ciclo repetivivo para sumar las notas del arreglo.
    for(let i = 0; i < notas.length; i++)
    {
        suma += notas[i]; // se almacena en suma  cada nota.
    }
    // se inicializa una variable llamada promedio y se le asigna el resultado de el promedio. 
    let promedio = suma / notas.length;
    // se inicializa la variable mensaje y se la asigna un tipo de valor vacio. 
    let mensaje = ""; 
    // condición para saber si el promedio es mayor o igual que 4.5.
    if (promedio >= 4.5)
    {
        mensaje = "Rendimiento Alto";
    }
    // condición para saber si el promedio es menor a 4.5 y mayor o igual a 3.0.
    else if (promedio < 4.5 && promedio >= 3.0)
    {
        mensaje = alert("Rendimiento Medio");
    }
    // condición para saber si el promedio es menor que 3.
    else if (promedio < 3)
    {
        mensaje = alert("Rendimiento Bajo");
    }
    // imprime el mensaje
    alert(`El promedio es: ${promedio} \n ${mensaje}`);
}