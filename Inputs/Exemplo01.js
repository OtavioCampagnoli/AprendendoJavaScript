/*  O input permite o usuário digitar informações direto no console em uma aplicação JS.

    Entrada de dados --> Processamento dos dados --> Saída de dados

    A utilização dos inputs não é um recurso nativo da linguagem.

    Comandos necessários para usar o input no console do javascript:

    npm init -y
    npm install readline-sync 

    Dentro do package.json:
        adicionar "type": "module",

        OBS:
            Nota: Devido a uma limitação do Windows, caracteres acentuados podem não ser exibidos corretamente no prompt de comando (cmd). Esse não é um problema do readline-sync e sim do Windows. Para resolvê-lo, execute o comando chcp 65001 no prompt de comando e a aplicação passará a exibir a acentuação corretamente.
*/

import ler from 'readline-sync';

let nome = ler.question("Informe o seu nome: ");
let idade = ler .question('Digite sua idade: ');
console.log("\nNome: " + nome);
console.log("Você tem "+idade+" anos de idade");