/*Exemplo prático
No exemplo a seguir temos um objeto que armazena dados de um aluno de academia. Utilizamos as propriedades referentes a altura e peso do aluno para calcular o seu índice de massa corpórea (IMC). Acessamos essas propriedades do objeto e utilizamos uma estrutura condicional*/

var aluno_academia =
{
    id: 1,
    nome: "Otavio",
    idade: 19,
    altura: 1.95,
    peso: 84
};
var id = aluno_academia.id;
var nome = aluno_academia.nome;
var idade = aluno_academia.idade;
var altura = aluno_academia.altura;
var peso = aluno_academia.peso;

console.log("Dados do aluno: \n\nID: " + id + "\nNome: " + nome + "\nIdade:  " + idade + " anos\nAltura: " + altura + " cm\nPeso: " + peso);

var imc = (peso / (altura * altura)).toFixed(2); // Depois do cálculo ele irá fixar até duas casas depois da virgula.


console.log("\nO IMC do aluno é: " +  imc);

//Verificação do estado do imc:

if  (imc < 18.5)
{
    console.log("O aluno " + nome + " está abaixo do peso.");
} else if(imc >= 18.5 && imc <= 24.99)
{
    console.log("O aluno " + nome + " está com o peso normal.");
} else
    console.log("O aluno " + nome + " está acima do peso.");





