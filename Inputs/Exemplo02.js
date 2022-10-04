/*Tratando números

Converte automaticamente tudo que recebe para string

*/


import ler, { question } from 'readline-sync';

let n1 = question('Informe o primeiro número: ');
let n2 = question('Informe o primeiro número: ');


let soma = Number(n1) + Number(n2);

console.log("\nA soma entre " + n1 + " + " +  n2 + " = " + soma);