import axios from 'axios';

//função para fazer requisições à API. 
const api = axios.create({
    baseURL : 'http://localhost:5270/SistemaDeCadastro'
}); 

export default apiService;