/*
Template string - outra maneira de  criar strings é dessa forma:
    let teste = `teste`;
        Normalmente é usado quando temos que concatenar muitas strings, por exemplo:
            console.log(`Estou testando aqui mesmo, de forma aleatoria: ${ teste }.`);

        Utilizar template string melhora a legibilidade permitindo inserir variáveis junto com o texto, ou seja, tudo dentro de acentos graves

*/

let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}