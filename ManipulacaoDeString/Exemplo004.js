/*
    trim();
    Usamos trim(); para reremover espaços em branco no ínicio e final da string;

    let nome = "   Diego     ";

    let resultado = nome.trim();

    console.log(resultado); // Diego

    OBS:
    
    Geralmente o método trim() é usado no cadastro e na validação de dados
    */


let cep_acesso = "  034512041 ";
let cep_cadastro = "034512041"


if(cep_acesso.trim() == cep_cadastro.trim())
{
    console.log("Os ceps são iguais.");
}

else
{
    console.log("Os ceps são diferentes.");
}


