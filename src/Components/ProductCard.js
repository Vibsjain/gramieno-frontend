import React, { useContext } from "react";
import { buyBtn } from "../Assets/Constants";
import { useNavigate } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

const ProductCard = ({ image, item, description, price, id }) => {
    const { added, setAdded } = useContext(ProductContext);
    const navigate = useNavigate();
    const btnClass = buyBtn;
    return (
        <div className="w-[20rem] drop-shadow-2xl about-font rounded-2xl zoom ">
            <div className="w-[20rem] bg-white h-[18rem] rounded-t-2xl">
                <img src={image} className="rounded-t-2xl h-full w-full "></img>
            </div>
            <div className="flex flex-col gap-4 justify-between w-[20rem] min-h-[10rem] rounded-b-2xl bg-[#FFF]  py-4 z-8">
                <div className="flex w-full justify-between">
                    <h1 className="w-1/2 px-2 text-center font-bold about-font">
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
                <div className="w-full flex min-h-full">
                    <div
                        className="flex w-6/12 justify-center items-center cursor-pointer hover:text-black"
                        onClick={() => {
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
                                    cart.push({ id, quantity: 1 });
                                    localStorage.setItem(
                                        "cart",
                                        JSON.stringify(cart)
                                    );
                                }
                            } else {
                                localStorage.setItem(
                                    "cart",
                                    JSON.stringify([{ id, quantity: 1 }])
                                );
                            }
                            setAdded(true);
                        }}
                    >
                        <button className={btnClass}>Add to Cart</button>
                    </div>
                    <div className="w-6/12 flex justify-center items-center">
                        <button className={btnClass}>Buy Now</button>
                    </div>
                </div>
                <button
                    className="text-right text-[12px] px-4 about-font"
                    onClick={() => navigate(`/products/${id}`)}
                >
                    View More Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
