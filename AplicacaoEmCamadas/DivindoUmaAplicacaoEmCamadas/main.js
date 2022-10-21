import {CalcularIMC, RetornaStatusIMC} from './CalcularIMC.js'
import {ValidaAltura, ValidaPeso} from './Validacao.js'

let peso = 120;
let altura = 1.95;

if(ValidaAltura && ValidaPeso)
{
    let resultado = CalcularIMC(altura, peso);
    let status = RetornaStatusIMC(resultado);

    console.log(`Seu IMC é: ${resultado}\nVocê está com : ${status}`);

}
else
{
    console.log("Sua altura e peso devem ser maiores que zero.");
}