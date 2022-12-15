import React, { useState } from "react";
import ProductContext from "./ProductContext";
import api from "../api";

const ProductState = (props) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const res = await api.get("/products");
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
    };

    const getProduct = async (id) => {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
    };

    const addProduct = async (product) => {
        setLoading(true);
        const res = await api.post("/products", product);
        setProducts([...products, res.data]);
        setLoading(false);
    };
    return (
        <div>
            <ProductContext.Provider
                value={{
                    products,
                    getProducts,
                    product,
                    getProduct,
                    addProduct,
                    loading,
                }}
            >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductState;
