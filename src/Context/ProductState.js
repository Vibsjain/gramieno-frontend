import React, { useState } from "react";
import ProductContext from "./ProductContext";
import api from "../api";

const ProductState = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    const [snack, setSnack] = useState({ text: "", visible: false });
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const res = await api.get("/products");
        setProducts(res.data);
        setLoading(false);
    };

    const getProduct = async (id) => {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data[0]);
        setLoading(false);
    };

    const addProduct = async (product) => {
        setLoading(true);
        const res = await api.post("/products", product);
        setProducts([...products, res.data]);
        setLoading(false);
    };

    const editProduct = async (id, product) => {
        setLoading(true);
        const res = await api.put(`/products/${id}`, product);
        setProducts(
            products.map((product) =>
                product._id === id ? { ...product, ...res.data } : product
            )
        );
        setLoading(false);
    };

    const getOrders = async () => {
        setLoading(true);
        const res = await api.get("/orders");
        setOrders(res.data);
        setLoading(false);
    };

    const getOrder = async (id) => {
        setLoading(true);
        const res = await api.get(`/orders/${id}`);
        setOrder(res.data[0]);
        setLoading(false);
    };

    const addOrder = async (order) => {
        setLoading(true);
        const res = await api.post("/orders", order);
        setOrders([...orders, res.data]);
        setLoading(false);
    };

    const editOrder = async (id, order) => {
        setLoading(true);
        const res = await api.put(`/orders/${id}`, order);
        setOrders(
            orders.map((order) =>
                order._id === id ? { ...order, ...res.data } : order
            )
        );
        setLoading(false);
    };

    const deleteOrder = async (id) => {
        setLoading(true);
        await api.delete(`/orders/${id}`);
        setOrders(orders.filter((order) => order._id !== id));
        setLoading(false);
    };

    const handleSnack = (text) => {
        setSnack({ text, visible: true });
        setTimeout(() => {
            setSnack({ text: "", visible: false });
        }, 3000);
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
                    added,
                    setAdded,
                    editProduct,
                    orders,
                    getOrders,
                    order,
                    getOrder,
                    addOrder,
                    editOrder,
                    deleteOrder,
                    snack,
                    handleSnack,
                    isLogged,
                    setIsLogged,
                }}
            >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductState;
