import React, { useContext } from "react";
import { buyBtn } from "../Assets/Constants";
import { useNavigate } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

const ProductCard = ({ image1, item, description, price, id, stock }) => {
    const { setAdded, handleSnack } = useContext(ProductContext);
    const navigate = useNavigate();
    const btnClass = `flex w-32 py-2 px-4 h-[50px] justify-center items-center border-2 border-white rounded-xl text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold text-sm`;
    const widthBox = "20rem";
    return (
        <div
            className={`w-[${widthBox}] drop-shadow-2xl about-font rounded-2xl zoom `}
        >
            <div
                className={`w-[${widthBox}] bg-white h-[12rem] rounded-t-2xl cursor-pointer`}
                onClick={() => navigate(`/products/${id}`)}
            >
                <img
                    src={image1}
                    className="rounded-t-2xl h-full w-full "
                ></img>
            </div>
            <div
                className={`flex flex-col gap-4 justify-between w-[${widthBox}] h-[15rem] rounded-b-2xl bg-[#FFF]  py-4 z-8`}
            >
                <div className="flex w-full justify-between text-sm">
                    <h1 className="w-1/2 px-2 text-center font-bold about-font ">
                        {item}
                    </h1>
                    <h1 className="w-1/2 px-2 text-center font-bold about-font">
                        {"₹   " + price}
                    </h1>
                </div>
                <h1 className="w-1/2 px-2 text-center text-[13px] font-light about-font text-gray-600">
                    {description.length > 20
                        ? description.slice(0, 30) + "..."
                        : description}
                </h1>
                <div className="w-full flex h-full">
                    <div
                        className="flex w-6/12 justify-center items-center cursor-pointer hover:text-black"
                        onClick={() => {
                            //check out of stock condition
                            if (stock === 0) {
                                handleSnack("Out of Stock");
                                return;
                            }
                            handleSnack("Your Item is Added to Cart");
                            const cart = JSON.parse(
                                localStorage.getItem("cart")
                            );
                            if (cart) {
                                const index = cart.findIndex(
                                    (item) => item.id === id
                                );
                                if (index !== -1) {
                                    cart[index].quantity += 1;
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify(cart)
                                    );
                                } else {
                                    cart.push({
                                        id,
                                        quantity: 1,
                                        price: price,
                                    });
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify(cart)
                                    );
                                }
                            } else {
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify([
                                        { id, quantity: 1, price: price },
                                    ])
                                );
                            }
                            setAdded(true);
                        }}
                    >
                        <button className={btnClass}>Add to Cart</button>
                    </div>
                    <div className="w-6/12 flex justify-center items-center">
                        <button
                            className={btnClass}
                            onClick={() => {
                                if (stock === 0) {
                                    handleSnack("Out of Stock");
                                    return;
                                }
                                const cart = JSON.parse(
                                    localStorage.getItem("cart")
                                );
                                if (cart) {
                                    const index = cart.findIndex(
                                        (item) => item.id === id
                                    );
                                    if (index !== -1) {
                                        cart[index].quantity += 1;
                                        localStorage.setItem(
                                            "cart",
                                            JSON.stringify(cart)
                                        );
                                    } else {
                                        cart.push({
                                            id,
                                            quantity: 1,
                                            price: price,
                                        });
                                        localStorage.setItem(
                                            "cart",
                                            JSON.stringify(cart)
                                        );
                                    }
                                } else {
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify([
                                            {
                                                id,
                                                quantity: 1,
                                                price: price,
                                            },
                                        ])
                                    );
                                }
                                navigate("/checkout");
                                const orders = cart;
                                localStorage.setItem(
                                    "orders",
                                    JSON.stringify(orders)
                                );
                                setAdded(true);
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
