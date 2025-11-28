import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productApi = {

    getCosmeticos: async () => {
        try {
            const response = await apiClient.get('/productos/', {
                params: { categoria: 'cosmetica' } 
            });

            const cleanData = response.data.map(producto => ({
                nombre: producto.nombre,
                imagen: producto.imagen,
                beneficios: producto.beneficios,
                precio: producto.precio
            }));

            return cleanData;
        } catch (error) {
            console.error("Error obteniendo cosméticos:", error);
            throw error;
        }
    },



    getAll: async () => {
        const response = await apiClient.get('/productos/');
        return response.data;
    },

    getByCategory: async (categoryName) => {
        const response = await apiClient.get('/productos/', {
            params: { categoria: categoryName }
        });
        return response.data;
    },

    getById: async (id) => {
        const response = await apiClient.get(`/productos/${id}/`);
        return response.data;
    },

    create: async (productData) => {
        const response = await apiClient.post('/productos/', productData);
        return response.data;
    },

    update: async (id, productData) => {
        const response = await apiClient.put(`/productos/${id}/`, productData);
        return response.data;
    },

    patch: async (id, partialData) => {
        const response = await apiClient.patch(`/productos/${id}/`, partialData);
        return response.data;
    },

    delete: async (id) => {
        const response = await apiClient.delete(`/productos/${id}/`);
        return response.data;
    },

    getCategories: async () => {
        const response = await apiClient.get('/categorias/');
        return response.data;
    },

    getFeatured: async () => {
        const response = await apiClient.get('/destacado/', {
            params: { page_size: 100 }
        });
        return response.data;
    },

    getMarqueeMessages: async () => {
        try {
            const response = await apiClient.get('/cintillo/');
            return response.data;
        } catch (error) {
            console.error("Error cargando cintillo:", error);
            return [];
        }
    },

    searchProducts: async (query) => { 
        try {
            const response = await apiClient.get('/productos/', {
                params: { search: query }
            });
            return response.data;
        } catch (error) {
            console.error("Error buscando productos:", error);
            return [];
        }
    }
}; 