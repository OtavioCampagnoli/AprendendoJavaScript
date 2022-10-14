/*Segundo exemplo:
    map é usado para criar um array a partir de outro contendo a mesma quantidade de elementos, porém com o valor alterado.
*/

const meses = [
    'Janeiro',
    'Feveiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function abreviarMes(mes) {
    return mes.substr(0, 3);
}

const mesAbreviados = meses.map(abreviarMes);

console.log(mesAbreviados);