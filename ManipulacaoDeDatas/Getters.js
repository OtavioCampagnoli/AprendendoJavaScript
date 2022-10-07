
/*

Para utilizar o valor retornado pelo método getMonth some 1 ao valor retornado

    getFullYear(); --> retorna o ano;
    getMonth(); ---> retorna o mês;
    getDate(); ---> retorna o dia do mês;
    getHours(); ---> retorna a hora (de 0 às 23);
    getMinutes(); ---> retorna os minutos (0 à 59);
    getSeconds(); ---> Retorna os segundos (0 à 59);
    getMiliseconds(); --> retorna os milisegundos (0 à 999);
    
    getTime(); ---> Retorna o timestamp da data;
    getTimezoneOffset(); ---> Retorna em minutos a diferença de fuso horário;
    valueOf(); --- > Retorna o valor primitivo do objeto;

    Para saber a diferença de fuso horário do sistema para o UTC utilizamos o método .getTimezoneOffset()
*/

const dataAtual = new Date();

console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() );
console.log( dataAtual.getDate() );
console.log( dataAtual.getHours() );
console.log( dataAtual.getMinutes() );
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay() );


console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );


console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );