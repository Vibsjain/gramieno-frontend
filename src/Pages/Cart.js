import React, { useState, useEffect, useContext } from "react";
import { Navbar, Footer, Slider } from "../Components";
import EmptyCart from "../Assets/Images/emptyCart.svg";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
    AOS.init();
    const navigate = useNavigate();
    const { products, getProducts } = useContext(ProductContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCart(cart);
        }
        console.log(cart);
        getProducts();
        console.log(products);
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);
    const buyBtn = `w-8 h-8 justify-center items-center border-2 border-white rounded-[6px] text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold`;
    const Card = ({ id, quantity }) => {
        const product = products.find((item) => item._id === id);
        return (
            <div className="w-full min-h-[12rem] flex flex-col sm:flex-row sm:gap-0 gap-8 bg-white rounded-lg ">
                <div className="sm:w-4/12 w-full flex gap-16">
                    <img
                        src={product.image1}
                        alt="table"
                        className="w-96 rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-br-none"
                    />
                </div>
                <div className="flex flex-col sm:w-6/12 w-full pl-4 py-2 justify-between">
                    <h1 className="font-bold ">{product.name}</h1>
                    <div className="flex flex-col gap-2 mt-2 text-[14px]">
                        <h1>
                            {product.description.length > 100
                                ? product.description.slice(0, 100) + "..."
                                : product.description}
                        </h1>
                        <h1>
                            Price : ₹{" "}
                            <span className="font-bold">{product.price}</span>
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-2 w-full items-center">
                        <button
                            className={buyBtn}
                            onClick={() => {
                                const cart = JSON.parse(
                                    localStorage.getItem("cart")
                                );
                                const index = cart.findIndex(
                                    (item) => item.id === id
                                );
                                if (cart[index].quantity > 1) {
                                    cart[index].quantity -= 1;
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify(cart)
                                    );
                                    setCart(cart);
                                }
                            }}
                        >
                            -
                        </button>
                        <h1 className="font-bold text-[14px]">{quantity}</h1>
                        <button
                            className={buyBtn}
                            onClick={() => {
                                const cart = JSON.parse(
                                    localStorage.getItem("cart")
                                );
                                const index = cart.findIndex(
                                    (item) => item.id === id
                                );
                                cart[index].quantity += 1;
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify(cart)
                                );
                                setCart(cart);
                            }}
                        >
                            +
                        </button>
                        <button
                            className="min-w-8 px-4 h-8 justify-center items-center border-2 border-white rounded-[6px] text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold"
                            onClick={() => {
                                const cart = JSON.parse(
                                    localStorage.getItem("cart")
                                );
                                const index = cart.findIndex(
                                    (item) => item.id === id
                                );
                                cart.splice(index, 1);
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify(cart)
                                );
                                setCart(cart);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:w-2/12 w-full pl-4 py-2 px-6 sm:items-end items-start justify-between ">
                    <div className="flex flex-row sm:flex-col justify-between w-full ">
                        <h1 className="font-bold sm:text-right text-left">
                            Total
                        </h1>
                        <div className="flex flex-col items-end">
                            <h1>{product.price}</h1>
                            <h1>x {quantity}</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end ">
                        <h1 className="font-bold">
                            ₹ {product.price * quantity}
                        </h1>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="back">
            <Navbar />
            {cart.length === 0 ? (
                <div className="w-full h-[80vh]">
                    <img
                        src={EmptyCart}
                        alt="Empty Cart"
                        className="w-[80%] h-[80%] mx-auto mt-20"
                    />
                </div>
            ) : (
                <div>
                    <div className="sm:hidden flex py-8">
                        <h1 className="bg-white w-full text-center mx-4 rounded-lg font-bold text-[20px] py-4">
                            Your Cart
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row w-full min-h-[100vh] sm:gap-0 gap-12">
                        <div className="flex flex-col gap-12 sm:w-2/3 w-full sm:px-8 px-4">
                            {cart.map((item) => (
                                <Card id={item.id} quantity={item.quantity} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 items-center sm:w-1/3 w-full sm:px-8 px-4">
                            <div className="flex flex-col w-full justify-between min-h-[300px]  bg-white px-4 rounded-lg py-4 ">
                                <div className="flex flex-col w-full ">
                                    <h1 className="text-center font-bold text-[18px]">
                                        Subtotal
                                    </h1>
                                </div>
                                <hr />
                                <div>
                                    {cart.map((item) => (
                                        <div className="flex justify-between px-4">
                                            <h1 className="font-bold">
                                                {
                                                    products.find(
                                                        (product) =>
                                                            product._id ===
                                                            item.id
                                                    ).name
                                                }
                                            </h1>
                                            <h1>
                                                ₹{" "}
                                                {products.find(
                                                    (product) =>
                                                        product._id === item.id
                                                ).price * item.quantity}
                                            </h1>
                                        </div>
                                    ))}
                                    <div className="flex px-4 justify-between mt-4">
                                        <h1 className="font-bold">Tax</h1>
                                        <h1>
                                            ₹{" "}
                                            {cart.reduce(
                                                (acc, item) =>
                                                    acc +
                                                    products.find(
                                                        (product) =>
                                                            product._id ===
                                                            item.id
                                                    ).price *
                                                        item.quantity *
                                                        0.18,
                                                0
                                            )}
                                        </h1>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex px-4 justify-between ">
                                    <h1 className="font-bold">Total</h1>
                                    <h1>
                                        ₹{" "}
                                        {cart.reduce(
                                            (acc, item) =>
                                                acc +
                                                products.find(
                                                    (product) =>
                                                        product._id === item.id
                                                ).price *
                                                    item.quantity *
                                                    1.18,
                                            0
                                        )}
                                    </h1>
                                </div>
                            </div>
                            <div className="my-4">
                                <button
                                    className="w-[100%] px-4 h-16 justify-center items-center border-2 border-white rounded-[6px] text-[20px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold"
                                    onClick={() => {
                                        navigate("/checkout");
                                        const orders = cart;
                                        localStorage.setItem(
                                            "orders",
                                            JSON.stringify(orders)
                                        );
                                        console.log(orders);
                                    }}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <h1 className="font-bold text-white my-12 px-12 sm:text-[26px] text-[20px] sm:text-left text-center">
                See More Related Products
            </h1>
            <Slider />
            <Footer />
        </div>
    );
};

export default Cart;
