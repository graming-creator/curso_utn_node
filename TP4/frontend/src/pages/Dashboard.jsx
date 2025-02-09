import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../services/api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "", category: "", stock: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProduct(editingId, formData);
      } else {
        await createProduct(formData);
      }
      setFormData({ name: "", price: "", category: "", stock: "", description: "" });
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleEdit = (product) => {
    setFormData({ name: product.name, price: product.price, category: product.category, stock: product.stock, description: product.description });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que quieres borrar el producto?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Dashboard de Productos</h1>

          <div className="box">
            <h2 className="subtitle">{editingId ? "Editar Producto" : "Agregar Producto"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Nombre</label>
                <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label className="label">Precio</label>
                <input className="input" type="number" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="field">
                <label className="label">Categoría</label>
                <input className="input" type="text" name="category" value={formData.category} onChange={handleChange} required />
              </div>
              <div className="field">
                <label className="label">Stock</label>
                <input className="input" type="number" name="stock" value={formData.stock} onChange={handleChange} required />
              </div>
              <div className="field">
                <label className="label">Descripción</label>
                <textarea className="textarea" name="description" value={formData.description} onChange={handleChange} required></textarea>
              </div>
              <button className="button is-primary" type="submit">Guardar</button>
            </form>
          </div>

          {products.length > 0 ? (
            <table className="table is-fullwidth is-striped is-hoverable mt-4">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                    <td>
                      <button className="button is-small is-warning mr-2" onClick={() => handleEdit(product)}>Editar</button>
                      <button className="button is-small is-danger" onClick={() => handleDelete(product._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="has-text-centered mt-4">No hay productos registrados.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Dashboard };
