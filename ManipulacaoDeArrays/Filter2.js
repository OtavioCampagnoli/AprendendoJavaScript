/*
    Outro exemplo:
*/

const carros = [
    {marca: 'Fiat', modelo: 'Argo', anoFabricacao: 2022},
    {marca: 'GM', modelo: 'Cruze', anoFabricacao: 2022},
    {marca: 'Ford', modelo: 'Ranger', anoFabricacao: 2019},
    {marca: 'Fiat', modelo: 'Mobi', anoFabricacao: 2022},
    {marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2017},
    {marca: 'Toyota', modelo: 'Corolla', anoFabricacao: 2020},
    {marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2019}
];

function RetornaMarcaFiat (carro)
{
    return carro.marca === 'Fiat';
}

const carrosFiat = carros.filter(RetornaMarcaFiat);

console.log(carrosFiat);