/*
    map();
        Percorre o array, criando outro com a mesma quantidade de elementos porém o valor dos elementos será diferente do origina.
*/

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornaCarro (carro)
  {
    return ' ' +  carro.marca + ' | ' + carro.modelo + ' | ' + carro.anoFabricacao;
  }

  const novosCarros = carros.map(retornaCarro);

  console.log(novosCarros);