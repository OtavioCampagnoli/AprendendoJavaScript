import ler from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: ");

let mi = ler.question("Informe o valor em Milhas: ");

let km = Math.round((mi / 0.62137));

console.log(mi + " equivale a " + km + "km");
