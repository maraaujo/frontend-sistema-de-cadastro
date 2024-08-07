import {apiService} from './api-service';

const cadastrarDepartamento = async (deaprtamento) => await apiService.post('/Departamento/LoginUsuario', deaprtamento);
const getById = async () => await apiService.get('/Departamento/PropcurarPorId');


export const departamentoApi ={
    cadastrarDepartamento,
    getById
}; 