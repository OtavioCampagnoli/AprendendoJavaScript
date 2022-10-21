import RetornaSerieDia from "./retornoSerie.js";

let data = new Date();
let diaSemana = data.getDay();

let serieDaSemana = RetornaSerieDia(diaSemana);

console.log('A série de hoje é: ' + serieDaSemana);