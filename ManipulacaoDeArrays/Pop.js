/*
    Função pop();
        Remove o último elemento e retorna ele do array;
*/

diaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    
];

console.log("Elemento retirado: " + diaSemana.pop()); // Sábado

for(dia in diaSemana)
{
    console.log(diaSemana[dia]);
}
