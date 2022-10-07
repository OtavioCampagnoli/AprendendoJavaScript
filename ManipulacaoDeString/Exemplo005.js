/*

    Preenchendo strings

    Em alguns casos pode ser necessário fazer o preenchimento de uma string com um determinado caractere até que essa string atinja um certo tamanho.
        
   
    
    
    padStart(20, " "); // Preenche no ínicio da string;
    padEnd(20, " "); // Preenche no final da string;



*/

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padStart(10, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );

//....................Nome:Jorge Luiz
// Profissão:Professor
// Endereço:Rua Cruzeiro do Sul