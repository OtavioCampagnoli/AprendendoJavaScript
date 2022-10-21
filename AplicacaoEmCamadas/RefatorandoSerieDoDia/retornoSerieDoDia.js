import RetornaDiaSemana from "./diaSemana";

let listaDeSeries = [
    'Smallville',
    'WandaVision',
    'Loki',
    'Gothan',
    'Arroy',
    'Flash',
    'DC Legends'
];

function RetornaNomeSerie (dia)
{
    return listaDeSeries[dia];
}

function RetornaSerieDia ()
{
    let diaSemana = RetornaDiaSemana();
    let serie = RetornaNomeSerie(diaSemana);
    return serie;
}

export default RetornaSerieDia;