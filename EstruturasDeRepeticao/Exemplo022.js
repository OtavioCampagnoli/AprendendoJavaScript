let clientesArray = [
    {id: 1, nome: "Mônica", telefone: "(18) 3711-0918"},
    {id: 2, nome: "Tânia", telefone: "(12) 2280-3531"},
    {id: 3, nome: "Carlos", telefone: "(18) 2596-2742"},
    {id: 4, nome: "Henrique", telefone: "(12) 2256-7637"},
    {id: 5, nome: "Júlio", telefone: "(15) 2011-5745"},
    {id: 6, nome: "Amanda", telefone: "(16) 3530-6506"}
];

for(let cliente of clientesArray)
{
    let id = cliente.id;
    let nome = cliente.nome;
    let telefone = cliente.telefone;
    
    
    console.log("Id: " + id + " - Nome: " + nome + " - Telefone: " +  telefone);
}