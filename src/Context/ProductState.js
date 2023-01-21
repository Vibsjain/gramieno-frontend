import React, { useState } from "react";
import logo from "../Assets/Images/logo.png";
import ProductContext from "./ProductContext";
import api from "../api";

const ProductState = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    const [snack, setSnack] = useState({ text: "", visible: false });
    const [data, setData] = useState({});
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);
    const [discounts, setDiscounts] = useState([]);

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

    const updateDeliveryStatus = async (id) => {
        setLoading(true);
        const res = await api.put(`/orders/status/${id}`);
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

    const getDiscounts = async () => {
        setLoading(true);
        const res = await api.get("/discounts");
        setDiscounts(res.data);
        setLoading(false);
    };

    const verifyPayment = async (data) => {
        const res = await api.post("/payment/verification", data);
        return res;
    };

    const checkoutHandle = async (data) => {
        console.log(data);
        const res = await api.post("/payment/checkout", data);
        const res1 = await api.get("/payment/key");
        const key = res1.data.key;
        const { amount, id, currency } = res.data.message;
        var options = {
            key: key,
            amount: amount,
            currency: currency,
            name: "Ankit Anand",
            description: "Test Transaction",
            image: logo,
            order_id: id,
            // handler: function (response) {
            //     // alert(response.razorpay_payment_id);
            //     // alert(response.razorpay_order_id);
            //     // alert(response.razorpay_signature);
            //     const verify = verifyPayment(response);
            //     console.log(verify);
            //     if (verify.success) {
            //         alert("Payment Successful");
            //     } else {
            //         alert("Payment Failed");
            //     }
            // },
            callback_url: "http://localhost:5000/api/payment/verification",
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#583400",
            },
        };
        const razor = new window.Razorpay(options);
        razor.open();
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
                    updateDeliveryStatus,
                    deleteOrder,
                    snack,
                    handleSnack,
                    isLogged,
                    setIsLogged,
                    checkoutHandle,
                    discounts,
                    getDiscounts,
                }}
            >
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductState;
