const dataUltimoAcesso = new Date('2020/11/11 17:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const miliHoras =  1000 * 60 * 60;
const miliDias = miliHoras * 24;
const miliSemanas = miliDias * 7;

let msg = "";

//Verificando horas para cumprimentar o usuário:

if(hora >= 18 || hora < 6)
{
    msg = "\nBoa noite! "
}
else if(hora >= 6 && hora < 12)
{
 msg = "\nBom dia! ";
}
else
{
    msg = "\nBoa tarde! ";
}

if(diferencaTime > miliSemanas)
{
    msg +=  "Você está ausente há semanas!!!";
}

else if(diferencaTime > miliDias)
{
    msg += "Você está ausente há dias!!!";
}
else if(diferencaTime > miliHoras)
{
    msg += "Você está ausente a horas!";
}
else
{
    msg += "Que bom que está ainda aqui";
}

console.log(msg);

