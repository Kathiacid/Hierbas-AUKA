import axios from 'axios';

// Configuración base de la URL
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productApi = {
    // --- NUEVO MÉTODO ESPECÍFICO ---
    
    // GET /productos/?categoria=cosmetica (Y limpieza de datos)
    getCosmeticos: async () => {
        try {
            // 1. Solicitamos los productos filtrados por categoría al backend
            const response = await apiClient.get('/productos/', {
                params: { categoria: 'cosmetica' } 
            });

            // 2. Filtramos la respuesta para quedarnos SOLO con los campos que pediste
            // Nota: Asegúrate de que los nombres de la derecha (p.ej: p.nombre) coincidan con tu Backend
            const cleanData = response.data.map(producto => ({
                nombre: producto.nombre,
                imagen: producto.imagen,         // O producto.image_url según tu backend
                beneficios: producto.beneficios, // O producto.description si beneficios está ahí
                precio: producto.precio
            }));

            return cleanData;
        } catch (error) {
            console.error("Error obteniendo cosméticos:", error);
            throw error;
        }
    },

    // --- MÉTODOS EXISTENTES (Se mantienen igual) ---

    // GET /productos/ (Listar todos)
    getAll: async () => {
        const response = await apiClient.get('/productos/');
        return response.data;
    },

    // GET /productos/?categoria=... (Filtrar genérico)
    getByCategory: async (categoryName) => {
        const response = await apiClient.get('/productos/', {
            params: { categoria: categoryName }
        });
        return response.data;
    },

    // GET /productos/1/ (Detalle)
    getById: async (id) => {
        const response = await apiClient.get(`/productos/${id}/`);
        return response.data;
    },

    // POST /productos/ (Crear)
    create: async (productData) => {
        const response = await apiClient.post('/productos/', productData);
        return response.data;
    },

    // PUT /productos/1/ (Editar completo)
    update: async (id, productData) => {
        const response = await apiClient.put(`/productos/${id}/`, productData);
        return response.data;
    },

    // PATCH /productos/1/ (Parchear / Edición parcial)
    patch: async (id, partialData) => {
        const response = await apiClient.patch(`/productos/${id}/`, partialData);
        return response.data;
    },

    // DELETE /productos/1/ (Eliminar)
    delete: async (id) => {
        const response = await apiClient.delete(`/productos/${id}/`);
        return response.data;
    },

    // --- OTROS ENDPOINTS ---

    // GET /categorias/ (Categorias con productos)
    getCategories: async () => {
        const response = await apiClient.get('/categorias/');
        return response.data;
    },

    // GET /destacado/ (Productos destacados)
    getFeatured: async () => {
        const response = await apiClient.get('/destacado/');
        return response.data;
    }
};