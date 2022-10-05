/*Com o array podemos armazenar vários dados de determinado domínio.*/

var nomes = [
    'Caio',
    'Rogério',
    'Amanda',
    'Otavio',
    'Yasmin',
    'Victor',
    'Ronaldo',
    'Rogério'
];

console.log(nomes);

for (let i = 0; i < nomes.length; i++)
{
    const elementos = nomes[i];
    console.log("Posição: " + (i+1) +"\nNome: " + elementos + ".\n");    
}