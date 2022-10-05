/*Para interromper todo o bloco de repetição utilize o comando break e para interromper apenas uma iteração utilize o comando continue

OBS:
    Caso seja necessário iterar todos os elementos da coleção, use o comando continue. Agora se o objetivo for encontrar apenas um único elemento que atenda a uma determinada condição, o comando break é a melhor opção.
*/

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while(contador < alunos.length)
{
    let aluno = alunos[contador];
    contador++;

    if(aluno.media < 6)
    {
        continue;
    }
    //Mostrar os reprovados
    console.log("Id: " + aluno.id + "\nNome: " + aluno.nome + "\nMédia: " + aluno.media + "\n");
}