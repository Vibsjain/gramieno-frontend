import React, { useState, useContext } from "react";
import { Footer } from "../Components";
import Logo from "../Assets/Images/logo.png";
import Orders from "./Admin/Orders";
import Product from "./Admin/Product";
import Upload from "./Admin/Upload";
import { LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import swal from "sweetalert";
import { BsFillShieldLockFill } from "react-icons/bs";

const Admin = () => {
    const { isLogged, setIsLogged } = useContext(ProductContext);
    const navigate = useNavigate();
    const navButtonStyle = `min-w-48 text-center blok border border-[#141C2F] rounded py-2 px-4 about-font`;
    const navChosesStyle = `bg-[#fff] text-[#141C2F]`;
    const navHoverStyle = `bg-[#141C2F] text-white hover:bg-[#fff] hover:text-[#141C2F]`;
    const iconStyle = `text-[25px] text-white cursor-pointer`;
    const [orderDetails, setOrderDetails] = useState(true);
    const [productDetails, setProductDetails] = useState(false);
    const [upload, setUpload] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleLogin = () => {
        if (data.username === "admin" && data.password === "admin@123") {
            localStorage.setItem("token", "login");
            setIsLogged(true);
            swal({
                title: "Success",
                text: "Welcome Admin",
                icon: "success",
            });
        } else {
            swal({
                title: "Wrong",
                text: "Please Re - Enter Admin Credentials",
                icon: "error",
            });
        }
    };
    const clearAll = () => {
        setOrderDetails(false);
        setUpload(false);
        setProductDetails(false);
        setCurrentTab(0);
    };
    const labelStyle = `block mb-2 text-[16px] font-medium text-black mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    return (
        <div className="back1 about-font">
            {isLogged ? (
                <div>
                    <div className="p-8 about-font">
                        <div className="flex p-4 admin-shadow rounded-full">
                            <div className="flex w-4/12 justify-start px-6">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-8 cursor-pointer"
                                    onClick={() => navigate("/")}
                                />
                            </div>
                            <div className="flex w-8/12 justify-end items-center gap-12 px-4">
                                <h1 className="about-font px-4 py-2 bg-white text-black rounded-2xl sm:flex hidden items-center font-bold h-12">
                                    Vaibhav Gupta
                                </h1>
                                <HomeOutlined
                                    className={iconStyle}
                                    onClick={() => navigate("/")}
                                />
                                <LogoutOutlined
                                    className={iconStyle}
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
                                                navigate("/admin");
                                            } else {
                                                swal("Logout Failed", {
                                                    icon: "error",
                                                });
                                            }
                                        });
                                        // window.location.reload();
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 mb-24 w-full">
                        <h1 className="text-white font-bold sm:text-[70px] text-[40px] text-center about-font">
                            Hey, Gramien'O
                        </h1>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex w-full sm:px-36 px-2 justify-center items-center">
                        <ul className="flex flex-wrap justify-center w-full gap-4">
                            <li>
                                <button
                                    className={`${navButtonStyle} ${
                                        orderDetails
                                            ? navChosesStyle
                                            : navHoverStyle
                                    }`}
                                    onClick={() => {
                                        clearAll();
                                        setOrderDetails(true);
                                        setCurrentTab(0);
                                    }}
                                >
                                    Order Details
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${navButtonStyle} ${
                                        productDetails
                                            ? navChosesStyle
                                            : navHoverStyle
                                    }`}
                                    onClick={() => {
                                        clearAll();
                                        setProductDetails(true);
                                        setCurrentTab(1);
                                    }}
                                >
                                    Product Details
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${navButtonStyle} ${
                                        upload ? navChosesStyle : navHoverStyle
                                    }`}
                                    onClick={() => {
                                        clearAll();
                                        setUpload(true);
                                        setCurrentTab(2);
                                    }}
                                >
                                    Upload Product
                                </button>
                            </li>
                        </ul>
                    </div>
                    {currentTab === 0 ? (
                        <Orders />
                    ) : currentTab === 1 ? (
                        <Product />
                    ) : (
                        <Upload />
                    )}
                </div>
            ) : (
                <div className="w-full flex flex-col items-center min-h-[100vh]">
                    <div className="py-8 w-full px-4">
                        <div className="flex p-4 admin-shadow rounded-full">
                            <div className="flex w-4/12 justify-start px-6">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-8 cursor-pointer"
                                    onClick={() => navigate("/")}
                                />
                            </div>
                            <div className="flex w-8/12 justify-end items-center gap-12 px-4">
                                <h1 className="about-font px-4 py-2 bg-white text-black rounded-2xl sm:flex hidden items-center font-bold h-12">
                                    Vaibhav Gupta
                                </h1>
                                <HomeOutlined
                                    className={iconStyle}
                                    onClick={() => navigate("/")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[75%] w-[95%] bg-white flex flex-col py-16 rounded-xl">
                        <div className="flex w-full justify-center items-center gap-4">
                            <h1 className="text-2xl font-bold text-center">
                                Login Admin
                            </h1>
                            <BsFillShieldLockFill className="text-3xl" />
                        </div>
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
                                    setData({
                                        ...data,
                                        username: e.target.value,
                                    })
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
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <button
                                className="text-white bg-[#1E293B] w-full my-8 text-[16px] border border-[#1E293B] py-2 rounded-lg hover:bg-white hover:text-[#1E293B] about-font"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Admin Details */}

            <Footer />
        </div>
    );
};

export default Admin;
