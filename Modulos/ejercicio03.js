export const generarTabla = (numero) => 
{
    let resultados = [];

    for(let i = 1; i < numero; i++)
    {
        let resul = i * numero;
        resultados.push(resul);
    }

    for(i = 1; i < numero; i++)
    {
        alert(`${i} x ${numero} = ${resultados[i]}`);
    }

}