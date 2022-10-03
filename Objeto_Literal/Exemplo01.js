var usuario = 
{
    id: 2,
    nome: "Otavio Henrique",
    idade: 19
};

var atendeAClassificacaoEtaria = usuario.idade >= 18;

if (atendeAClassificacaoEtaria ===  true)
{
    console.log("Acesso permitido ao conteúdo.");
}   else
    console.log("O usuário não pode assistir o conteúdo ainda.");

