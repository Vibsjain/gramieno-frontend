import React, { useState, useEffect, useContext } from "react";
import Logo from "../Assets/Images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import swal from "sweetalert";
import Modal from "react-awesome-modal";
import api from "../api/index";
import "../Assets/CSS/index.css";
import { navColor } from "../Assets/Constants";

function Navbar() {
    const { added, setAdded } = useContext(ProductContext);
    const [cartItems, setCartItems] = useState(0);
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await api.post("/contact", data);
        swal({
            title: "Success",
            text: "Message Sent",
            icon: "success",
        });
        setData({
            name: "",
            email: "",
            message: "",
        });

        setOpen(false);
    };
    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Our Story", path: "/our-story" },
    ];
    const labelStyle = `block mb-2 text-[16px] font-medium text-black mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 about-font`;
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCartItems(cart.length);
        }
        setAdded(false);
        // eslint-disable-next-line
    }, [added]);
    return (
        <div className={`flex w-full bg-[#B89C7D] z-[10] py-[10px]`}>
            <Modal
                visible={modalOpen}
                width="90%"
                height="90%"
                effect="fadeInUp"
                onClickAway={() => setModalOpen(false)}
            >
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4 sm:gap-4 gap-2">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setModalOpen(false);
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="text-black font-bold text-center text-[24px]">
                            Contact Us
                        </h1>
                    </div>
                    <div className="sm:px-28 px-4">
                        <label className={labelStyle}>Name</label>
                        <input
                            type="text"
                            id="title"
                            className={inputStyle}
                            placeholder="Full Name"
                            value={data.name}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    name: e.target.value,
                                });
                            }}
                        />

                        <label className={labelStyle}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className={inputStyle}
                            placeholder="Enter Your Email"
                            value={data.email}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    email: e.target.value,
                                });
                            }}
                        />

                        <label className={labelStyle}>Message</label>
                        <textarea
                            type="text"
                            id="message"
                            className={inputStyle}
                            placeholder="Write Your Message"
                            value={data.message}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    message: e.target.value,
                                });
                            }}
                            rows={5}
                        />
                        <button
                            className="text-white bg-[#B89C7D] w-full my-8 text-[16px] py-2 rounded-lg hover:bg-blue-800 about-font"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
            <div className="flex sm:w-9/12 w-3/12  sm:px-8 px-4 sm:items-center ">
                <div className="bg-white p-2 w-16 h-16 rounded-lg flex justify-center items-center">
                    <img
                        className="sm:h-[40px] h-[30px]  cursor-pointer"
                        src={Logo}
                        alt=""
                        onClick={() => navigate("/")}
                    />
                </div>
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
                    <li>
                        <button
                            className="flex text-[16px] text-[#FFFFFF] hover:text-black hover:bg-white py-2 px-6 rounded-xl"
                            onClick={() => setModalOpen(true)}
                        >
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex sm:w-3/12 w-9/12 sm:pb-0 sm:px-8 px-4 gap-8 sm:items-center justify-end hidden sm:flex">
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
                <MdOutlineAdminPanelSettings
                    className="text-white text-[32px] hover:text-black cursor-pointer "
                    onClick={() => navigate("/admin")}
                />
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
                <div className="transition ease-in-out delay-150 h-[100vh] top-0 fixed w-full sm:hidden flex justify-end bg-[rgb(0,0,0,0)] z-[10]">
                    <div className="h-full w-8/12 side-nav py-4 px-4">
                        <CloseOutlined
                            className="text-[30px] text-black"
                            onClick={() => setOpen(!open)}
                        />
                        <ul className="flex flex-col mt-12 gap-4 justify-center items-center">
                            {navLinks.map((link) => {
                                return (
                                    <button
                                        className="text-black text-lg"
                                        onClick={() => navigate(`${link.path}`)}
                                    >
                                        {link.title}
                                    </button>
                                );
                            })}
                            <button
                                className="text-black text-lg"
                                onClick={() => setModalOpen(true)}
                            >
                                Contact Us
                            </button>
                            <div className="w-full flex justify-center items-center mt-[-1px]">
                                <div className="h-[1px] bg-black w-9/12"></div>
                            </div>
                            <div className="flex justify-end relative z-4">
                                <div className="w-4 h-4 rounded-full bg-[#FF0000] text-white font-bold text-[12px] absolute ml-[-4px]">
                                    <h1 className="text-center">{cartItems}</h1>
                                </div>
                            </div>

                            <i
                                className="fa fa-shopping-cart sm:text-[28px] text-[25px] hover:text-black cursor-pointer"
                                onClick={() => navigate("/cart")}
                            ></i>
                            <MdOutlineAdminPanelSettings
                                className="text-black text-[30px] hover:text-black cursor-pointer "
                                onClick={() => navigate("/admin")}
                            />
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
