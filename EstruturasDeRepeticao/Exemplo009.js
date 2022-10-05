let funcionarios = [
    {id: 1, nome: "Lucas", habilitado: false},
    {id: 2, nome: "Pedro", habilitado: false},
    {id: 3, nome: "Marcos", habilitado: false},
    {id: 4, nome: "João", habilitado: true},
    {id: 5, nome: "Nicolas", habilitado: false},
    {id: 6, nome: "Paulo", habilitado: false},
    {id: 7, nome: "André", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length )
{

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true )
    {
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
    
    contador++;
}

if (!encontrouHabilitado)
{
    console.log("Nenhum funcionário habilitado encontrado");
}

