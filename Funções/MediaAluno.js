function calculaMedia (nota_1, nota_2)
{
    let media = (nota_1 + nota_2) / 2;
    let status = "";

    if (media >= 0 && media <= 2)
    {
        status = "Aluno reprovado! \nMédia: " + media;
    }
    else if (media > 1 && media <= 6)
    {
        status = "Aluno de recuperação! \nMédia: " + media;
    }
    else
    {
        status = "Aprovado! \nMédia: " + media;
    }

    return status + "\n";
    
}

let status_aluno1 = calculaMedia(2, 2);
console.log(status_aluno1);

let status_aluno2 = calculaMedia(10, 5);
console.log(status_aluno2);