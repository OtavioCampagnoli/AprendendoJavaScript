const ConverterEmCelsius = (fahrenheit) => 
{
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

export default ConverterEmCelsius;