import express from "express";

const app = express(); // instanciando express

// Setando interpretação por json:
app.use(express.json())


const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]


app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id); // funcao que retorna o livro com id passado pela req.
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id); // funcao que retorna o livro com id passado pela req.
    livros[index].titulo = req.body.titulo; // atualiza o titulo do livro em questao.
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id); // funcao que retorna o livro com id passado pela req.
    livros.splice(index, 1) // apagando o livro (1 sendo quantos elemento eu quero excluir a partir do index).
    res.send(`Livro ${id} foi removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}


export default app;