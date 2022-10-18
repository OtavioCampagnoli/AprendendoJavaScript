/* Principal, onde iremos executar a aplicação...
    OBS: 
        Separar a aplicação em arquivos diferentes nos permite dividir as responsabilidades para cada arquivo dentro do projeto.
*/


import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log(`O nome do signo hoje: ${nome_signo}`);

