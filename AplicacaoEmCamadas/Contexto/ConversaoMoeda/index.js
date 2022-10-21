import { ConverteParaEuro, ConverteParaReal } from "./servicos.js";
import {FormataEuro, FormataReal, FormataDolar} from './formatacao.js'

let dolar = '5.00';
let valorConvertido = 0;
let conversor = 'euro';

if(conversor === 'real')
{
    valorConvertido = ConverteParaReal(dolar);
    valorConvertido = FormataReal(valorConvertido);
}
else if (conversor === 'euro')
{
    valorConvertido = ConverteParaEuro(dolar);
    valorConvertido = FormataEuro(valorConvertido);
}

console.log(`Valor em Dólar: ${FormataDolar(dolar)}`);
console.log(`Valor convertido: ${valorConvertido}`);
