import React, { useState, useEffect } from "react";
import { Navbar, Footer, Slider } from "../Components";
import EmptyCart from "../Assets/Images/emptyCart.svg";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCart(cart);
        }
    });
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
                <div></div>
            )}
            <h1 className="font-bold text-white my-12 px-12 text-[26px]">
                See More Related Products
            </h1>
            <Slider />
            <Footer />
        </div>
    );
};

export default Checkout;
