/*
    Ordenando com sort uma coleção de objetos:
*/

    let alunos = [

        { nome: 'Erick', matricula: 10},
        { nome: 'Arthur', matricula: 12},
        { nome: 'Ricardo', matricula: 1},
        { nome: 'Otávio', matricula: 21}
    ];

    function OrdenaMatricula(a, b)
    {
        return a.matricula - b.matricula;
    }

    console.log("\nArray antes da ordenação: ");
    console.log(alunos);

    alunos.sort(OrdenaMatricula);

    console.log("\nArray depois da ordenação: ");
    console.info(alunos);