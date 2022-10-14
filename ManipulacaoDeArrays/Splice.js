/*
    Método nativo splice();
        Remove um ou mais elementos de array;
*/

    const diaSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ];

    console.log(diaSemana.splice(1, 2)); // Aqui eu passo a posição inicial e final. Nesse caso a 2º à 3º posição. //Segunda-Feira, Terça-Feira

    for(dia in diaSemana)
    {
        console.log(diaSemana[dia]);
    }



