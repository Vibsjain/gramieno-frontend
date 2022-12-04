import React, { useState, useEffect } from "react";
import Logo from "../Assets/Images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function Navbar() {
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
        console.log(location.pathname);
    });
    return (
        <div className="flex w-full">
            <div className="flex sm:w-9/12 w-3/12 sm:py-12 sm:px-20 px-4 py-4 sm:items-center ">
                <img className="sm:h-[60px] h-[50px]" src={Logo} alt="" />
                <ul className="flex gap-6 mx-8 hidden sm:flex">
                    {navLinks.map((link) => {
                        return (
                            <li>
                                <button
                                    className="flex text-[18px] text-[#FFFFFF] hover:text-black hover:bg-white py-2 px-6 rounded-xl"
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
            <div className="flex sm:w-3/12 w-9/12 sm:py-12 sm:px-20 px-4 py-4 gap-8 sm:items-center justify-end hidden sm:flex">
                <i className="fa fa-shopping-cart sm:text-[35px] text-[25px]    text-white hover:text-black cursor-pointer"></i>
                <button className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[16px] text-white hover:text-black hover:bg-white text-center">
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
                    <div className="h-full w-8/12 bg-[#5c5755] py-4 px-4">
                        <CloseOutlined
                            className="text-[30px] text-white"
                            onClick={() => setOpen(!open)}
                        />
                        <ul className="flex flex-col">
                            {navLinks.map((link) => {
                                return (
                                    <button className="">{link.title}</button>
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
