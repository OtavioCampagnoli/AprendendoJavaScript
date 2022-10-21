
const ConverteParaReal = (dolar) =>
{    
    let conversao = 5.14;
    let real = dolar * conversao;
    return real;
}

const ConverteParaEuro = (dolar) =>
{
    let taxaDeConversao = 0.83;
    let euro = dolar * taxaDeConversao;
    return euro;
}

export 
{
    ConverteParaEuro,
    ConverteParaReal
}