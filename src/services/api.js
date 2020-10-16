import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.169.5.10:3000', //Caminho API JSON-Server
});

export default api;

//METODOS DE REQUISIÇÃO HTTP
//GET -> Solicitando uma Informação.
//POST -> Criando algo (criar seção, algo no banco de dados).
//PUT -> Atualizar algum dado.
//DELETE -> Remover um dado ou recurso.
//PATCH -> Atualizações de dados parciais

//CODIGOS DE STATUS HTTP
//Respostas de informação (100-199)
//Respostas de sucesso (200-299)
//Redirecionamentos (300-399)
//Erros do cliente (400-499)
//Erros do servidor (500-599)