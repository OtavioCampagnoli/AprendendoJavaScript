let numeros = [0, 2, 5, 3, 10, 89, 45, 20, 10];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while(contador < numeros.length)
{
    if(numeros[contador] % 2 == 0)
    {
        total_pares++;
    }
    else
    {
        total_impares++;
    }
    contador++;
}

console.log("Total de números pares: " + total_pares);
console.log("Total de números ímpares: " + total_impares    );