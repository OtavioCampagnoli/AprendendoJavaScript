/*
    Função shift();
        Remove o primeiro e retorna o elemento do array;
*/

    const diaSemana = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];

   console.log("Elemento retirado: " + diaSemana.shift());

    for(dia in diaSemana)
    {
        console.log(diaSemana[dia]);
    }
