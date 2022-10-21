/*A técnica de refatoração será essencial não apenas na divisão de camadas, mas também durante toda sua carreira como programador. Um código organizado demonstra profissionalismo e é através da refatoração que a organização do código é alcançada. E lembre-se: a refatoração é um ciclo e você deve sempre buscar melhorar o código da sua aplicação */


const ConverteEmFahrenheit = (celsius) => 
{
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}




const MostrarStatusDaTemperatura = (fahrenheit) =>
{
    let msg = '';
    if(fahrenheit >= 99)
    {
        msg += 'Temperatura muito alta.';
        return msg;
    }
    else
    {
        msg += 'Temperatura normal.';
        return msg;
    }
}

export
{
    ConverteEmFahrenheit,
    MostrarStatusDaTemperatura
}