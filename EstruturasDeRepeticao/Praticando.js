/*Coleção de cursos*/

let cursos_idiomas =
[
    {nome: "Inglês", preco: 2500, cargaHoraria: 160},
    {nome: "Espanhol", preco: 1500, cargaHoraria: 110},
    {nome: "Francês", preco: 3600, cargaHoraria: 200},
    {nome: "Chinês", preco: 5500, cargaHoraria: 400},
    {nome: "Alemão", preco: 3800, cargaHoraria: 230}
];

console.log("\nInformações do curso: \n");
for(let curso of cursos_idiomas)
{
    let nome = curso.nome;
    let preco = curso.preco;
    let cargaHoraria = curso.cargaHoraria;
    let valorPorHora = (preco / cargaHoraria).toFixed(2);

    console.log("Nome: " + nome + "\nPreço: R$" + preco + "\nCarga horária: " + cargaHoraria + " horas." + "\nValor por hora: R$" + valorPorHora + "\n");
}