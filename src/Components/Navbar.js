import React, { useState, useEffect, useContext } from "react";
import Logo from "../Assets/Images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import ProductContext from "../Context/ProductContext";

function Navbar() {
    const { added, setAdded } = useContext(ProductContext);
    const [cartItems, setCartItems] = useState(0);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Our Story", path: "/our-story" },
        { title: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCartItems(cart.length);
        }
        setAdded(false);
    }, [added]);

    return (
        <div className="flex w-full  back  z-[10]">
            <div className="flex sm:w-9/12 w-3/12 sm:py-12   sm:px-12 px-4 py-4 sm:items-center ">
                <img
                    className="sm:h-[60px] h-[50px] cursor-pointer"
                    src={Logo}
                    alt=""
                    onClick={() => navigate("/")}
                />
                <ul className="flex gap-4 mx-8 hidden sm:flex">
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <button
                                    className="flex text-[16px] text-[#FFFFFF] hover:text-black hover:bg-white py-2 px-6 rounded-xl"
                                    onClick={() => navigate(`${link.path}`)}
                                >
                                    {link.title}
                                </button>
                                {location.pathname === link.path && (
                                    <div className="w-full flex justify-center items-center mt-[-1px]">
                                        <div className="h-[1px] bg-white w-9/12"></div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex sm:w-3/12 w-9/12 sm:py-12 sm:px-12 px-4 py-4 gap-8 sm:items-center justify-end hidden sm:flex">
                <div>
                    <div className="flex justify-end relative z-4">
                        <div className="w-4 h-4 rounded-full bg-[#FF0000] text-white font-bold text-[12px] absolute ml-[-4px]">
                            <h1 className="text-center">{cartItems}</h1>
                        </div>
                    </div>

                    <i
                        className="fa fa-shopping-cart sm:text-[28px] text-[25px] text-white hover:text-black cursor-pointer"
                        onClick={() => navigate("/cart")}
                    ></i>
                </div>
                <button
                    className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[14px] text-white hover:text-black hover:bg-white text-center"
                    onClick={() => navigate("/admin")}
                >
                    Sign In
                </button>
            </div>
            <div className="w-full flex justify-end items-center px-4 sm:hidden flex">
                {open ? (
                    <CloseOutlined
                        className="text-[30px] text-white"
                        onClick={() => setOpen(!open)}
                    />
                ) : (
                    <MenuOutlined
                        className="text-[30px] text-white"
                        onClick={() => setOpen(!open)}
                    />
                )}
            </div>
            {open && (
                <div className="h-[100vh] absolute w-full sm:hidden flex justify-end bg-[rgb(0,0,0,0)]">
                    <div className="h-full w-8/12 side-nav py-4 px-4">
                        <CloseOutlined
                            className="text-[30px] text-white"
                            onClick={() => setOpen(!open)}
                        />
                        <ul className="flex flex-col mt-12 gap-4">
                            {navLinks.map((link) => {
                                return (
                                    <button
                                        className="text-white text-lg"
                                        onClick={() => navigate(`${link.path}`)}
                                    >
                                        {link.title}
                                    </button>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
