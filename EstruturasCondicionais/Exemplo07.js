/*Curto-circuito
    Simplificar condições mais simples ainda!

    Utilizar curto-circuito permite ao desenvolvedor implementar condicionais if com muito menos linhas de código
    
    Usando o if normal...

    var aprovado = true;
    if(aprovado)
    {
        console.log("Aprovado!");
    }
*/

var aprovado = true;
aprovado && console.log("Aprovado!");


// Outro exemplo
const nome = 'Otavio';

const nomeValido = nome.length > 0; // true

nomeValido && console.log(nome); // true, logo então irá retornar o nome

