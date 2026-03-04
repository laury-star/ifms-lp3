
const express = require("express");
//cria a aplicação
const app = express();

app.get("/", (req, res) => {
    res.send("servidor da turma de LP3 ON");

});
app.get("/aluno", (req, res) => {
    res.send("rota do aluno funcionando");

});
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);

});