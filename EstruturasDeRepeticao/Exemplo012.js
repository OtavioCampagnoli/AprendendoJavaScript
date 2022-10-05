let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do
{
    console.log((contador+1) + " º mês: " + meses[contador] + "\n");
    contador++;
} while(contador < meses.length);