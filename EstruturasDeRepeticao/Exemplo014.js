let valor_mensalidade = 100;
let taxa_multa = 0.02;
let total_dias = 11;
let contador = 1;


do
{
    let dias_atraso = contador;
    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    let valor_novo_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + valor_novo_mensalidade + ",00");

    contador++;
} while( contador < total_dias);
