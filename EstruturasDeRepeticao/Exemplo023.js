/*
A estrutura de repetição for tem um contador presente em sua sintaxe, não sendo necessário implementá-lo. Já nas estruturas while e do .. while existe a necessidade incrementar o contador dentro do bloco.
*/

let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);

    contador++; // Se tirar aqui roda o bloco até o infinito;

} while ( contador < meses.length );