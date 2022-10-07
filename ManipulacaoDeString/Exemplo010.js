/*
    Separando strings em substrings
        Para isso usamos o split();

    Que irá verificar aquilo que que passamos como parâmetro;

        OBS:
            O método split() aceita um parâmetro que tenha mais de 1 caractere para quebrar strings, porém é mais comum o uso de um único caractere para essa tarefa.
    
*/



let paises = "Brasil,Espanha,Turquia,França,Alemanha";
console.log("\nUsando split(): ");
let colecao_paises = paises.split(",");
console.log(colecao_paises);
console.log(colecao_paises.length);
console.log("\nSem usar split(): \n");
console.log(paises);
console.log(paises.length);