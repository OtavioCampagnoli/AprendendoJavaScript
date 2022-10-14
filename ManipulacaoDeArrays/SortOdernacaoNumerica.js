/*
    Ordenando um array de números com o Sort();

*/

    const numeros = [
        10,
        1,
        2
    ];

    console.log("\nArray antes da ordenação: \n");
    console.info(numeros);

    numeros.sort();

    console.log("\nArray depois da ordenação: \n");

    function odernacaoNumeros(a, b) {
        return a - b;
    }

    numero.sort(odernacaoNumeros);

    console.log("\nArray depois da ordenação:\n");
    console.log(numeros);
    console.log("\n");



