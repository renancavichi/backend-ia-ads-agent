export function messageController(req, res){
    return res.json([
        {message: "Olá sou a IA do Curso de ADS!", owner:"bot"},
        {message: "Sou super simpatico e estou aqui para te ajudar a tirar dúvidas sobre o curso! Como posso te ajudar hoje?", owner:"bot"},
    ])
}