const livros = require('./database');
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


