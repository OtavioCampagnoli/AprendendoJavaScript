/*
    Por que utilizar módulos?
        Vantagens da separação de um projeto em arquivos menores:
            Código mais fácil de ler;
            Código mais fácil de manter e atualizar;
            Código mais profissional.
    Ao separarmos o código em partes menores,
        integramos essas partes através dos comandos import e export

    COMO USAR?
    
        exporte o recurso no arquivo onde foi criado
importe o recurso no arquivo onde será usado
após importar, basta usar o recurso através do seu nome
*/


/*Aqui é onde o código será executado:  */


import {SomaNumeros , SubtracaoNumeros} from "./funcoes.js";

let n1 = 50;
let n2 = 20;

let soma01 = SomaNumeros(n1, n2);
let sub01 = SubtracaoNumeros(n1, n2);
console.log(`A soma é: ${soma01}`);
console.log(`A subtracação é: ${sub01}`);
