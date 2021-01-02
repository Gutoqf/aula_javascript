// Postagem de Blog
// Objeto Postagem
/*
título, mensagem, autor, visualizações
comentários (autor, mensagem), estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);