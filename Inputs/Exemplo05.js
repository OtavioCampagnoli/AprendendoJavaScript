import ler, { question } from 'readline-sync';

console.log("Área do triângulo: \n");

let base = ler.question("Informe o valor da base: ");
let altura = ler.question("\nInforme o valor da altura: ");

let area = (base * altura) / 2;

console.log("\nA área do triângulo é: " + area);