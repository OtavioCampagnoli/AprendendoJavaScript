/*
    forEach();
        Percorre um array, dando a possibilidade de utilizar outras funções naquele array.
*/

const produtos = [
    {id: 1, nome: 'Macarrão', estoque: 60, valor: 2.00},
    {id: 2, nome: 'Áçucar', estoque: 30, valor: 2.45},
    {id: 3, nome: 'Arroz', estoque: 15, valor: 12.47},
];

function ImprimirNomeProdutos (produto)
{
    console.log(produto.nome);
}

produtos.forEach(ImprimirNomeProdutos);

const ImprimirPrecoProdutos = (produto) =>
{
    console.log("Valor: " + produto.valor);
};

produtos.forEach(ImprimirPrecoProdutos);