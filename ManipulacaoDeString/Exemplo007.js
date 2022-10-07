/*

    Retornando partes da substrings
        Quando é necessário extrair substrings de determinado texto, podemos usar: substr(); substring();

*/


let frase = "Estou aprendendo JavaScript";

let resultado = frase.substr(6, 10); // Ele pega da posição inicial e conta pega mais 10;

console.log(resultado);



let resultado02 = frase.substring(6, 10); // Ele pega da posição inicial e vai até a décima posição;

console.log(resultado02);
