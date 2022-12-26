import React, { useState, useEffect, useContext } from "react";
import Logo from "../Assets/Images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import Modal from "react-awesome-modal";
import swal from "sweetalert";

function Navbar() {
    const { added, setAdded, isLogged, setIsLogged } =
        useContext(ProductContext);
    const [cartItems, setCartItems] = useState(0);
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Our Story", path: "/our-story" },
        { title: "Contact", path: "#contact" },
    ];
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const labelStyle = `block mb-2 text-[16px] font-medium text-black mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCartItems(cart.length);
        }
        setAdded(false);
        // eslint-disable-next-line
    }, [added]);
    const handleLogin = () => {
        if (data.username === "admin" && data.password === "admin@123") {
            localStorage.setItem("token", "login");
            setIsLogged(true);
            swal({
                title: "Success",
                text: "Welcome Admin",
                icon: "success",
            });
            setModalOpen(!modalOpen);
        } else {
            swal({
                title: "Wrong",
                text: "Please Re - Enter Admin Credentials",
                icon: "error",
            });
        }

        console.log(data);
    };
    return (
        <div className="flex w-full  back  z-[10]">
            <Modal
                visible={modalOpen}
                width="90%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => {
                    setModalOpen(!modalOpen);
                }}
            >
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => setModalOpen(!modalOpen)}
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center">
                        Login Admin
                    </h1>
                    <div className="sm:px-48 px-4">
                        <label className={labelStyle}>Username</label>
                        <input
                            className={inputStyle}
                            name="username"
                            id="username"
                            type="text"
                            placeholder="Enter Your Username"
                            value={data.username}
                            onChange={(e) =>
                                setData({ ...data, username: e.target.value })
                            }
                        />
                        <label className={labelStyle}>Password</label>
                        <input
                            className={inputStyle}
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Enter Your Password"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                        <button
                            className="text-white bg-blue-700 w-full my-8 text-[16px] py-2 rounded-lg hover:bg-blue-800 about-font"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </Modal>
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
                {isLogged && (
                    <div>
                        <MdOutlineAdminPanelSettings
                            className="text-[30px] text-white hover:text-black cursor-pointer"
                            onClick={() => navigate("/admin")}
                        />
                    </div>
                )}
                {isLogged ? (
                    <LogoutOutlined
                        className="text-[24px] text-white hover:text-black"
                        onClick={() => {
                            swal({
                                title: "Are you sure want to logout?",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            }).then((res) => {
                                if (res) {
                                    setIsLogged(false);
                                    localStorage.removeItem("token");
                                    swal("Logout Successful!", {
                                        icon: "success",
                                    });
                                } else {
                                    swal("Logout Failed", {
                                        icon: "error",
                                    });
                                }
                            });
                            // window.location.reload();
                        }}
                    />
                ) : (
                    <button
                        className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[14px] text-white hover:text-black hover:bg-white text-center"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        Sign In
                    </button>
                )}
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
                <div className="h-[100vh] absolute w-full sm:hidden flex justify-end bg-[rgb(0,0,0,0)] z-[10]">
                    <div className="h-full w-8/12 side-nav py-4 px-4">
                        <CloseOutlined
                            className="text-[30px] text-white"
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
                            <i
                                className="fa fa-shopping-cart sm:text-[28px] text-[25px] hover:text-black cursor-pointer"
                                onClick={() => navigate("/cart")}
                            ></i>
                            {isLogged && (
                                <div>
                                    <MdOutlineAdminPanelSettings
                                        className="text-[30px] hover:text-black cursor-pointer"
                                        onClick={() => navigate("/admin")}
                                    />
                                </div>
                            )}
                            {isLogged ? (
                                <LogoutOutlined
                                    className="text-[24px]  hover:text-black"
                                    onClick={() => {
                                        swal({
                                            title: "Are you sure want to logout?",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        }).then((res) => {
                                            if (res) {
                                                setIsLogged(false);
                                                localStorage.removeItem(
                                                    "token"
                                                );
                                                swal("Logout Successful!", {
                                                    icon: "success",
                                                });
                                            } else {
                                                swal("Logout Failed", {
                                                    icon: "error",
                                                });
                                            }
                                        });
                                        // window.location.reload();
                                    }}
                                />
                            ) : (
                                <button
                                    className="flex w-32 py-2 px-4 justify-center items-center border border-black rounded-xl  hover:text-black hover:bg-white text-center"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Sign In
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
