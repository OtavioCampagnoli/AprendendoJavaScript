/*
Conseguir entender e executar a divisão de contextos é essencial para quem vai trabalhar com aplicações em camadas, pois todo conceito de camadas se baseia nos conceitos aprendidos aqui
*/
import { CalcularIMC, RetornaStatusIMC, ValidaAltura, ValidaPeso } from '../CalcularIMC/CalculadoraIMC.js'

let altura = 1.95;
let peso = 86.9;

let verificaPesoValido = ValidaPeso(peso);
let verificaAlturaValida = ValidaAltura(altura);

if(verificaPesoValido && verificaAlturaValida)
{
    let resultado = CalcularIMC(peso, altura);
    let statusIMC = RetornaStatusIMC(resultado);
    console.log(`Seu IMC é: ${resultado} e você está ${statusIMC}.`);
}
else
{
    console.log("Peso e altura devem ser maiores que zero.");
}

