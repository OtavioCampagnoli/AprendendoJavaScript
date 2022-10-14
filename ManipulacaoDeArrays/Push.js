/* 
    Método nativo push();
        O método é reponsável por empurrar um elemento na última posição disponível no vetor.
*/


const diaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',

];
    console.log(diaSemana.push('Sábado'));
    
    for(dia in diaSemana)
    {
        console.log(diaSemana[dia]);        
    }