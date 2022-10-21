
const FormataReal = (real) =>
{
    let valorFormatado = 'R$ ' + real;
    return valorFormatado;
}

const FormataEuro = (euro) =>
{
    let valorFormatado  = ' € ' + euro;
    return valorFormatado;
}

const FormataDolar = (dolar) =>
{
    let valorFormatado = '$ ' + dolar;
    return valorFormatado;
}

export
{
    FormataEuro,
    FormataReal,
    FormataDolar
}