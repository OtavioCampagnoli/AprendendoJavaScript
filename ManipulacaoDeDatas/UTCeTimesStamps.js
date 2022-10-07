
/*  Toda a data UTC é apresentada desse forma
        UTC é o tempo universal que serve de base para os fusos horários
            UTC =  Tempo universal cordenado;
                    1970-01-01T00:00Z
                Através do UTC conseguimos manipular uma data independente do fuso horário e através do Timestamp conseguimos verificar a diferença entre uma data e outra
    */

    
    const dataAtual = new Date();
    const dataPostagem = new Date('2022-07-10T00:00');

    const timeAtual = dataAtual.getTime();
    const timePostagem = dataPostagem.getTime();

    const diferenca = timeAtual - timePostagem;

    const segundos = diferenca / 1000;
    const minutos = segundos / 60;
    const horas = minutos / 60;

    console.log(horas);

