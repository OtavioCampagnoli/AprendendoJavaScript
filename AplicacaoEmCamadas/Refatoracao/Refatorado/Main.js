import {ConverteEmFahrenheit, MostrarStatusDaTemperatura} from "../Refatorado/ConverterParaFahrenheit.js";

let celsius = 15;
let fahrenheit = ConverteEmFahrenheit(celsius);
console.log("Temperatura: " + fahrenheit + "°F");
console.log(MostrarStatusDaTemperatura(fahrenheit));
    