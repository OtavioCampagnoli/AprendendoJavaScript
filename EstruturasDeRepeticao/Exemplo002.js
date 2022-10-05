let valor_produto = 752.45;


for(let contador = 1; contador <= 5; contador++)
{
    let valor_parcela = valor_produto / contador;
    console.log("Você irá pagar: R$" + valor_produto + " em " + contador + " parcelas de: R$" + valor_parcela.toFixed(2));
}

