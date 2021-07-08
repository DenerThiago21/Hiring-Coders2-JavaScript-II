const livros = require('./database');
const Livro = require('./Livro');
const readline = require('readline-sync');
/**
 * Melhorando o projeto 
 * -> Criar menu inicial
 * -> Cadastrar livro
 * -> Mostrar livros
 * -> Consultar livros por nome
 * -> Manter Consultar livro por categoria (trazer lista de categoorias do array e automatizar)
 * -> Excluir um livro (por id e por nome); -> Assume-se que não haverá livro repetido.
 */

const menu = '---> Escolha uma opcao <--- \n'+
             '--------------------------------\n' +
             '1. Cadastrar Livro \n' +
             '2. Listar Livros \n' +
             '3. Consultar Livros por Nome \n' +
             '4. Consultar Livros por Categoria \n' +
             '5. Excluir Livro \n' +
             '0. Sair\n';

const opcao = readline.question(menu);


if (opcao == 1) {
    const nome = readline.question('Informe o nome do Livro: ');
    const autor = readline.question('Informe o autor do Livro: ');
    const categoria = readline.question('Informe categoria do Livro: ');
    const paginas = readline.question('Informe a quantidade de paginas do Livro: ');
    let leu = readline.question('Voce ja leu este livro? S/N ');
    let recomenda = readline.question('Voce recomendaria este livro? S/N ');

    if(leu.toLocaleUpperCase() === 'S'){
        leu = true;
    } else {
        leu = false;
    }

    if(recomenda.toLocaleUpperCase() === 'S') {
        recomenda = true;
    } else {
        recomenda = false;
    }
    
    const livro = new Livro();

    livro.autor = autor;
    livro.nome = nome;
    livro.categoria = categoria;
    livro.paginas = paginas;
    livro.leu = leu;
    livro.recomenda = recomenda;

    console.log(livro);
}

/***************************************************************************************
// pegar o input
// se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
// se escolher não, mostra todos os livros em ordem crescente pela quantidade de páginas
const entradaInicial = readline.question('Deseja buscar um livro? S/N');

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:');
    console.log('Produtividade e estilo de vida', '/Tecnologia', '/Ficção', '/Fantasia');
    
    const entradaCategoria = readline.question('Qual categoria você escolhe?');

    const retorno = livros.filter((livro) => livro.categoria === entradaCategoria);

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Essas são todos os livros disponíveis: ');
    console.table(livrosOrdenados);S
}
*********************************************************************************************/


