function ValidaAltura (altura)
{
    let alturaValidada = 0;
    if(altura > 0)
    {
         alturaValidada = true;
    }
    else
         alturaValidada = false;
    return alturaValidada;
}

function ValidaPeso (peso)
{
    let pesoValidado;
    if(peso > 0)
    {
        pesoValidado = true;
    }
    else
        pesoValidado = false;
    return pesoValidado;
}

export 
{
    ValidaAltura,
    ValidaPeso
}

