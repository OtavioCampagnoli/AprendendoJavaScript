/*

    Arrow Functions são funções escritas de forma diferente da tradicional.
        Elas podem receber parâmetros ou não.  
            Obs: Nesse caso você tem que armazenar em uma constante;
                

*/


function retorna_media(nota1, nota2)
{
    let media =  (nota1 + nota2) / 2;
    return media;
};

// Arrow Function: 

const retornarMedia = (nota1, nota2) =>
{
    let media = (nota1 + nota2) / 2;
    return media;
};

let aluno1 = retorna_media(5 , 10);
console.log(aluno1);

// Ela pode ser mais reduzida ainda (Nesse caso simplificamos, pois é um caso onde a resposta é muito breve): 

const somaDoisNumeros = (n1, n2) => n1 + n2;

let teste = somaDoisNumeros(5, 5);
console.log(teste);