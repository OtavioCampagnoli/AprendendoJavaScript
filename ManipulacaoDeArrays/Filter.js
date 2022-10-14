/*
    filter();
        Usada para filtrar os elementos de um array, criando um novo array com apenas os elementos que atendem a condição;

*/

const produtosCadastros = [
    {id: 1, nome: 'Macarrão', ativo: true, valor: 3.00},
    {id: 2, nome: 'Pão de forma', ativo: false, valor: 5.4},
    {id: 3, nome: 'Molho de tomate', ativo: true, valor: 2.34},
    {id: 4, nome: 'Atum em lata', ativo: false, valor: 5.00}
];

function VerificarProdutoAtivo(produto)
{
    return produto.ativo == true;
}

const produtosAtivos =  produtosCadastros.filter(VerificarProdutoAtivo);

console.log(produtosAtivos); // O elemento do array só será armazenado no novo array caso a função retorne true

/*
    Retorno:
        [
        { id: 1, nome: 'Macarrão', ativo: true, valor: 3 },
        { id: 3, nome: 'Molho de tomate', ativo: true, valor: 2.34 }
        ]
*/