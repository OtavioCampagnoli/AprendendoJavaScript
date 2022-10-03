// Igualdade Estrita
/*Quando fazemos uma comparação e usamos o == estamos comparando os valores, porém não os tipos de dados;
    Nesse caso devemos usar o === ou !== (negação) para comparar os tipos de dados também.
*/
/*
let x = 10;
let y = "10";

if(x == y)
{
    console.log("X é igual a Y");
}
else
{
    console.log("X é diferente de Y");
}
 */
// Nesse caso irá retornar um false
let x = 10;
let y = "10";

if(x === y)
{
    console.log("X é igual a Y");
}
else
{
    console.log("X é diferente de Y");
}
