import ler, { question } from 'readline-sync';

console.log("\nConversor de Celsius para Kelvin: \n");
let c = ler.question("Informe o valor em Celsius: ");
let k = Number(c) + 273.15;

console.log(c + " ºC equivale a " + k + "K");