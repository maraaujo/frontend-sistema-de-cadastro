import apiService from "./api-service";

const createUsuario = async (user) => {
    try{ 
        const response = await apiService.post('/Admin/Cadastrarusuario', user);
        return response.data;
    }catch(error){
        console.error('Error to fetch data from API',error);
        throw error;
    }
};

const loginUser = async (user) => {
    try{
        const response = await apiService.post('/Admin/LoginUsuario', user);
        return response.data;
    }catch(error){
        console.error('Error to fetch data from API',error);
        throw error;
    }
};

const getAllIdosos = async () => {
    try{
        const response = await apiService.get('/Admin/GetAllIdoso');
        return response.data;
    }catch(error){
        console.error('Error to fetch data from API', error)
    }
}; 

const getIdoso = async (filter) => {
     try{
        const response = await apiService.get('/admin/subscriptions', { params: filter });
        return response.data;
     }catch(error){
        console.error('Error to fetch data from API',error);
        throw error;
     }
}; 

const getIdosoById = async (id) => {
    try{
        const response = await apiService.get(`/Admin/GetIdosoById/${id}`);
        return response.data;
    }catch(error){
        console.error('Error to fetch data from API',error);
        throw error;
    }
};
const getElderlyMedicine = async (id) => {
    try {
        const response = await apiService.get(`/Admin/GetElderlyMedicine/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar medicamentos do idoso:', error);
        throw error;
    }
};

export const adminApi = {
    createUsuario,
    loginUser,
    getAllIdosos,
    getIdoso,
    getIdosoById,
    getElderlyMedicine
};