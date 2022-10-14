/*
    reduce();
        É utilizada para reduzir um array a um único valor. Esse valor reduzido pode ser um número, uma string, um array ou um objeto.
*/


const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979 },
    { id: 2, nome: 'Donkkey Kong', anoLancamento: 1981 },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981 },
    { id: 4, nome: 'Asteroids', anoLancamento: 1979 },
];

function RetornarNomeDoJogo (nomes, jogo)
{
    return nomes + jogo.nome + ', ';
}

const nomeJogos = jogos.reduce(RetornarNomeDoJogo, 'Jogos: '); // Obs: o segundo parâmetro é o valor inicial que será somado ao jogo

console.log(nomeJogos.slice(0, -2)); // Para retirar a última , dos nome dos jogos.