export const buscarElemento = (elemento, lista, cantidad) =>
{
    for (let i = 0; i < cantidad; i++)
    {
        if(elemento === lista)
        {
            return true;
        }
    }

}