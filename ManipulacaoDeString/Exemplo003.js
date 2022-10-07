/*
    toLowerCase() / toUpperCase()
    Quando os dados tiverem sensibilidade à diferença entre caracteres maiúsculos e minúsculos será necessário usar os métodos nativos para resolver esse problema;

    let programador_1 = "Flávia";
    let programador_2 = "Rogério";

    console.log(programador_1.toUpperCase()); // FLÁVIA

    console.log(programador_2.toLowerCase()); // rogério

*/

// O JavaScript diferencia letras maisculas de minusculas;
let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

let email_acesso = "otaviocampagnoli@hotmail.com";

let email_cadastro = "OTAVIOCAMPAGNOLI@HOTMAIL.COM";


if(email_acesso.toLowerCase() == email_cadastro.toLocaleLowerCase())
{
    console.log("Foi enviado um link de ativação para o seu email.");
}
else
{
    console.log("Esse E-mail não existe em nossa base de dados.");
}