/*
    Além de retornarmos um number pode converter esse number para uma string;

    Curiosidades: 
        ISO 8601 é uma norma internacional par representação de data e hora emitida pela Organização Internacional para Padronização
*/

const dataAtual = new Date();

console.log(dataAtual.toDateString()); // Converte somente a data;

console.log(dataAtual.toTimeString()); // Converte somente o horário;

console.log(dataAtual.toString()); // Converte tanto a data como o horário;



console.log(dataAtual.toISOString()); // Retorna uma string com o formato universal (ISO 8601);

console.log(dataAtual.toLocaleString()); // Retorna uma string com apenas a data e o tempo.

console.log(dataAtual.toLocaleDateString()); // Retorna uma string apenas com a data.

console.log(dataAtual.toLocaleTimeString()); // Retorna uma string apenas com o tempo.

/* Personalizando o retorno;

    Podemos personalizar o retorno dos métodos:
        toLocaleString();
        toLocaleDateString();
        toLocaleTimeString();
            Usando dois parâmetros:
                (1º 'en-US',2º objeto);
                    OBS: 
                        As opções de idiomas não são suportadas em todos os dispositivos. Por exemplo no Node o idioma pt-BR não está disponível
 
*/



const personalizandoData =  {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));

  const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );

  const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );

//Aplicando

const alterandoData = {
    weekday: 'long',
    month: '2-digit',
    year: '2-digit',
    day: '2-digit'
};

console.log(dataAtual.toLocaleDateString('pt-br', alterandoData));

const mudandoTempo = 
{
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

console.log(dataAtual.toLocaleTimeString('pt-br', mudandoTempo));
debugger
const mudandoDataTempo = 
{
    dataStyle: "medium",
    timeStyle: "short"
};

console.log(dataAtual.toLocaleString('pt-br', mudandoDataTempo));

const semanaHora = 
{
    weekday: "long",
    hour: "numeric",
    minute: "numeric"
};

console.log(dataAtual.toLocaleString('pt-br', semanaHora));