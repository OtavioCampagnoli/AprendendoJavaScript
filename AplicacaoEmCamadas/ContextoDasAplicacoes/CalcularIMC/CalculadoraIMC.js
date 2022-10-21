function CalcularIMC (peso, altura)
{
    let imc = peso / (altura + altura);
    return imc.toFixed(2);
}

function RetornaStatusIMC (imc)
{
    let status;
    if(imc <= 18.5)
    {
        status = 'abaixo do peso';
    }
   else if (imc > 18.5 && imc <= 24.9)
    {
        status = 'peso normal'
    }
    else if (imc > 24.9 && imc < 30)
    {
        status = 'acima do peso'
    }
    else
    {
        status = 'obesidade'
    }
    return status;
}

const ValidaPeso = (peso) =>
{
    let pesoValido = 0;
    if(peso > 0)
    {
        pesoValido = true;
    }
    else
    {
        pesoValido = false;
    }
    return pesoValido;
}

const ValidaAltura = (altura) =>
{
    let alturaValida = 0;
    if(altura > 0)
    {
        alturaValida = true;
    }
    else
    {
        alturaValida = false;
    }
    return alturaValida;
}

export
{
    RetornaStatusIMC,
    CalcularIMC,
    ValidaPeso,
    ValidaAltura
}