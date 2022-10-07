/*
O método split() é muito útil para extrair dados de strings maiores. Assim é importante saber como é a composição da string para identificar o caractere que será usado como separador

*/


let nome_completo = "Otávio Henrique Moreira Campagnoli";

let array = nome_completo.split(" "); // Divide(separa) a string nome_completo

let primeiroNome = array[0];

console.log(`Olá ${primeiroNome}, seja bem-vindo ao nosso mais novo grupo de negócios.`);