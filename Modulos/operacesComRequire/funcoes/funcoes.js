/*
    Quando usamos require não precisamos de um package.json
        Para exportar:
            module.exports = {
                    nomeDoModulo que você deseja importar.
            }
        Para importar:
            const testeModulo = require('./funcoes/funcoes.js');

*/

const SomaNumeros = (n1, n2) => 
{
    return n1 + n2;
};

const SubtrairNumeros = (n1, n2) =>
{
    return n1 - n2;
}

module.exports = 
{
    SomaNumeros,
    SubtrairNumeros
}