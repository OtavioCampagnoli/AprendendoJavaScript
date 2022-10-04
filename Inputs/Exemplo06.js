import ler, { question } from 'readline-sync';

console.log("Área do triângulo: \n");

let base = question("Informe a base do triângulo: ");
let altura = question("\nInforme a altura do triângulos: ");

let area = (base * altura) / 2;

console.log("\nA área do triângulo de base " + base + " e altura " + altura + " é: " + area );