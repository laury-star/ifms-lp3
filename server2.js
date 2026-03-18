
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Acesso:", req.method, req.url);
    next();

});

app.get("/", (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/aluno/Laura">Ir para alunos</a><br>
        <a href="status">Ir para status</a><br>  
        <a href="subtracao">Ir para subtracao</a><br>
        <a href="multiplicacao">Ir para mutiplicacao</a>
        `);

});
app.get("/aluno", (req, res) => {
    res.send("rota do aluno funcionando");

});
app.get("/aluno/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Ola, ${nome}!`)
})

app.get("/soma/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a + b;

    res.send(`Resultado: ${resultado}`);
});

app.get("/multiplicacao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a * b;

    res.send(`Resultado: ${resultado}`);
});
app.get("/subtracao/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    const resultado = a - b;

    res.send(`Resultado: ${resultado}`);
});

app.get("/status", (req, res) => {
    res.json({
        servidor: "online",
        disciplina: "LP3",
        professora: "Milena",
        hora: new Date().toLocaleString()
    })
})

const PORTA = 3001;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);

});