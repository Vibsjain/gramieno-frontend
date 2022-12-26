import React, { useState, useContext } from "react";
import { Footer } from "../Components";
import Logo from "../Assets/Images/logo.png";
import Orders from "./Admin/Orders";
import Product from "./Admin/Product";
import Upload from "./Admin/Upload";
import {
    LogoutOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import swal from "sweetalert";

const Admin = () => {
    const { setIsLogged } = useContext(ProductContext);
    const navigate = useNavigate();
    const navButtonStyle = `min-w-48 text-center blok border border-[#141C2F] rounded py-2 px-4 about-font`;
    const navChosesStyle = `bg-[#fff] text-[#141C2F]`;
    const navHoverStyle = `bg-[#141C2F] text-white hover:bg-[#fff] hover:text-[#141C2F]`;
    const iconStyle = `text-[25px] text-white cursor-pointer`;
    const [orderDetails, setOrderDetails] = useState(true);
    const [productDetails, setProductDetails] = useState(false);
    const [upload, setUpload] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const clearAll = () => {
        setOrderDetails(false);
        setUpload(false);
        setProductDetails(false);
        setCurrentTab(0);
    };

    return (
        <div className="back1 about-font">
            {/* Admin Details */}
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
                                        localStorage.removeItem("token");
                                        swal("Logout Successful!", {
                                            icon: "success",
                                        });
                                        navigate("/");
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
                <ul class="flex flex-wrap justify-center w-full gap-4">
                    <li>
                        <button
                            class={`${navButtonStyle} ${
                                orderDetails ? navChosesStyle : navHoverStyle
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
                            class={`${navButtonStyle} ${
                                productDetails ? navChosesStyle : navHoverStyle
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
                            class={`${navButtonStyle} ${
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
            <Footer />
        </div>
    );
};

export default Admin;
