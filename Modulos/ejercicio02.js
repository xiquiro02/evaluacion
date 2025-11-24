export const validarAcceso = function(edad, contraseña)
{
    const password = 123456789;

    if (edad >= 18 && contraseña === password)
    {
        alert("Ingreso aceptado...");
    }
    else 
    {
        alert("Ingreso rechazado...");
    }
}