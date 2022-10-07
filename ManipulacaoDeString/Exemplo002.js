/*Length
    Usamos normalmente quando queremos saber o tamanho de determinada string
    let nome = `Jonas Silva`;
            Cada caracter da variavel nome é uma posição:
                [0][1][2][3][4][5][6][7][8][9][10]
                 J  o  n  a  s     S  i  l  v  a
                 OBS: O espaço também conta como uma posição;
                 
*/
/*
let nome = `Jonas Silva`;

console.log(`Nome: ${nome}\nTamanho: ${nome.length}`);*/

let cep = "23010-090";

if ( cep.length != 9 ){

    console.log("O CEP deve ter 9 caracteres");

}