export const validarAcceso = function(edad, contraseña)
{
    // seinicializa una constante llamada password y se le asigna un valor. 
    const password = 123456789; 
    // condición que si edad es mayor o igual a 18 y contrasena es estrictamente igual a password se cumple.
    if (edad >= 18 && contraseña === password)
    {
        return "Acceso concedido";
    }
    // si no se cumple la condición imprime acceso denegado.
    else 
    {
        return "Acceso denegado";
    }
}