//Coleção de Objetos vs Objeto

// Coleção de Objetos

var colecao_disciplinas = [
    { id: 1, nome: "Português", carga_horaria: 240 },
    { id: 2, nome: "Matemática", carga_horaria: 220 },
    { id: 3, nome: "História", carga_horaria: 160 },
    { id: 4, nome: "Geografia", carga_horaria: 140 },
    { id: 5, nome: "Química", carga_horaria: 160 },
    { id: 6, nome: "Física", carga_horaria: 150 },
    { id: 7, nome: "Inglês", carga_horaria: 120 },
    { id: 8, nome: "Sociologia", carga_horaria: 100 },
    { id: 9, nome: "Filosofia", carga_horaria: 120 }
];

for (var i = 0; i < colecao_disciplinas.length; i++)
{
    console.log("\nID: " + colecao_disciplinas[i].id + "\nNome: " + colecao_disciplinas[i].nome + "\nCarga Horária: " + colecao_disciplinas[i].carga_horaria);
}