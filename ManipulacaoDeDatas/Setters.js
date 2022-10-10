/*
    Depois de criar datas podemos mudar valores delas;
        Podemos usar algumas funções nativas do método setter (métodos do objeto Date);
            

    

*/

let dataAtual = new Date(); // Criando um objeto;
//Data (mm/dd/yy);
dataAtual.setDate(15); // Dia 20
dataAtual.setFullYear(2022); // Ano 1997
dataAtual.setMonth(1); // Janeiro
//Horário
dataAtual.setHours(11); // Horas
dataAtual.setMinutes(40); // Minutos
dataAtual.setSeconds(50); // Segundos
dataAtual.setMilliseconds(23); // Milisegundos
console.log(dataAtual.toString());
//Alterando uma data: 
//Os setters são usados para alterar uma informação do objeto;
let data = new Date();
data.setFullYear(1992);
data.setMonth(2);
data.setDate(20);
//Alterando horário
data.setHours(12);
data.setMinutes(40);
data.setSeconds(20);
console.log(data.toString());
console.log(data.toUTCString());

dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);

const dataAleatoria = new Date("2020-11-09 01:05:09");
console.log(dataAleatoria.toDateString());
// Impressão: Mon Nov 09 2020
// O método .setTime() altera uma data através de um timestamp
dataAtual.setTime(886302309000);
console.log(dataAleatoria.toDateString());
// Impressão: Sun Feb 01 1998

