/*A separação de uma aplicação em camadas ajuda não apenas deixar seu código mais organizado e profissional, como também permite uma manutenção mais rápida e, em alguns casos, diminui as chances de erro humano durante uma manutenção ou implementação do código */
import ConverterEmCelsius from "./conversor.js";
let fahrenheit = 32;
let calc01 = ConverterEmCelsius(fahrenheit);
console.log(calc01);