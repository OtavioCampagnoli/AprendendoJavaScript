/*
    Quando nosso código possui vários objetos reunidos no mesmo contexto (em um array, por exemplo) temos uma coleção de objetos
*/

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];


for(let email of emails_alunos)
{
    console.log(email);
}