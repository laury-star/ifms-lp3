app.post("/filmes", (req,res)=>{
    const novoFilme = req.body;
    filmes.push(novoFilme);
    res.json({
        mensagem:"Filme adicionado!",
        filme: novoFilme
    });
})