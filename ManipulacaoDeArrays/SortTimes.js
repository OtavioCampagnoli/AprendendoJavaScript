/*
    Ordenação descrecente do maior para o menor usando sort();  
        OBS: Lembre-se: O método sort vai comparar todos os itens do array aplicando a regra de ordenação definida
*/

let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function OrdenacaoMaisPontos (a, b)
{
    return b.pontos - a.pontos;
}

tabela.sort(OrdenacaoMaisPontos);

for(let i = 0; i < tabela.length; i++)
{
    
    console.log(tabela[i].equipe + " | " + tabela[i].pontos + "pts");
}