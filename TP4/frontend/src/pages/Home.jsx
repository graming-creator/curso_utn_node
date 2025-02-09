import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllProducts } from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchingProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };

    useEffect(() => {
        fetchingProducts();
    }, []);

    console.log(products);

    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Hola desde Home</h1>
                    {products.length > 0 && (
                        <div className="columns is-multiline">
                            {products.map((product) => (
                                <div key={product.id} className="column is-one-third">
                                    <div className="card">
                                        <div className="card-content">
                                            <h2 className="title is-4">{product.name}</h2>
                                            <p className="subtitle is-6">Precio: ${product.price}</p>
                                            <p className="has-text-weight-semibold">Stock: {product.stock}</p>
                                            <p className="content">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export { Home };