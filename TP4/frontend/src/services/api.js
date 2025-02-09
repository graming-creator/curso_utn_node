import axios from "axios";

const BASE_URL_API = "http://localhost:3000/api/products";

// Obtener productos
const getAllProducts = async () => {
    try {
        const response = await axios.get(BASE_URL_API);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Crear producto
const createProduct = async (product) => {
    try {
        const response = await axios.post(BASE_URL_API, product);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Modificar producto
const updateProduct = async (productId, updatedProduct) => {
    try {
        const response = await axios.patch(`${BASE_URL_API}/${productId}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Borrar producto
const deleteProduct = async (productId) => {
    try {
        await axios.delete(`${BASE_URL_API}/${productId}`);
    } catch (error) {
        console.error(error);
    }
};

export { getAllProducts, createProduct, updateProduct, deleteProduct };
