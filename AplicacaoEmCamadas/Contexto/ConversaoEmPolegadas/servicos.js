import FormatadaConversaoParaPolegadas from './medidasServicos.js' // Importanto recurso da subcamada medidasServicos.js;
const ConverteCentrimetroEmPolegada = (cm) =>
{
    let polegadas = cm / 2.54;
    let resultadoFormatado = FormatadaConversaoParaPolegadas(polegadas);
    return resultadoFormatado;
}

export default ConverteCentrimetroEmPolegada;