
export function calcularPromedio(notas) 
{
    let suma;
    let mensaje;

    for(let i = 0; i < notas; i++)
    {
        suma = suma + notas[i];
    }
    let promedio = suma / notas;
    if (promedio >= 4.5)
    {
        mensaje = alert("Alto mayor o igual que 4.5");
    }
    else if (promedio < 4.5 && promedio >= 3.0)
    {
        mensaje = alert("Alto mayor o igual que 4.5");
    }
    else if (promedio < 3)
    {
        mensaje = alert("Bajo menor que 3");
    }
    
    alert(`El promedio es: ${promedio} - ${mensaje}`);
}