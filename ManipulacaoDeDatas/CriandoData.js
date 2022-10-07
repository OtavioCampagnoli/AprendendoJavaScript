/*
    O QUE IREMOS APRENDER:
        Criar uma data
        Instanciar o objeto do tipo Date.
        Manipular uma data
        Pegar as informações da data (por exemplo: ano, mês, dia, hora etc.).
        Alterar um valor da data (por exemplo: adicionar uma hora, um mês etc.).

        Date nos permite trabalhar com data e hora na linguagem JavaScript

        Através do objeto do tipo Date conseguimos comparar duas datas

*/

    // Por padrão irá pegar a data atual;
    const dataAtual =  new Date();

    // Podemos fazer parâmetros para uma data

    const exemplo01 = new Date("2022-07-10");
    const exemplo02 = new Date("22-07-10 14:47:00");

    //Podemos passar números;

    const exemplo03 = new Date(2022, 7, 10, 14, 47, 15);
    const exemplo04 = new Date(ano, mês, dia, hora, minuto, segundo, milisegundo);

    



