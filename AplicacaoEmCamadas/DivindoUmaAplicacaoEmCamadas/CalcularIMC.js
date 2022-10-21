function CalcularIMC (altura, peso)
{
    let imc = peso / (altura * altura);
    return imc;
}

function RetornaStatusIMC (imc)
{
    let status;
    if(imc <= 18.5)
    {
        status = 'abaixo do peso'
    }
    else if(imc > 18.5 && imc <= 24.9)
    {
        status = 'peso normal'
    }
    else if(imc > 24.9 && imc < 30)
    {
        status = 'acima do peso'
    }
    else
    {
        status = 'obesidade'
    }
    return status;
}

export
{
    CalcularIMC,
    RetornaStatusIMC
}