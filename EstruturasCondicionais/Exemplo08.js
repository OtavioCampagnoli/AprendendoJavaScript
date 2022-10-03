//Switch Case
/*Nota: Expressões booleanas também podem ser utilizadas como parâmetro do switch, entretanto, seu uso não é recomendado, sendo mais indicado o uso da estrutura condicional if, que funciona especificamente com expressões booleanas*/

// Colocar sempre o break para pausar quando a condição por equivalente a cada caso.

/*
var produto = "TV";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
    break;
    case "TV":
        console.log("Produto: TV");
    break; 
    default:
        console.log("Produto inválido");
        break;
}
 */
//Outro exemplo: 

var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

//Exemplo prático

var mes = "Outubro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho": 
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido!");
        break;

}