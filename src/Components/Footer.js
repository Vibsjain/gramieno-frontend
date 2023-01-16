import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import whatsapp from "../Assets/Images/whatsapp.png";
import instagram from "../Assets/Images/instagram.webp";
import facebook from "../Assets/Images/facebook.png";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/index.css";
import Modal from "react-awesome-modal";
import api from "../api/index";
import swal from "sweetalert";

const Footer = () => {
    const [open, setOpen] = useState(false);
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
    const navigate = useNavigate();
    const socialIcons = [
        {
            title: "whatsapp",
            icon: whatsapp,
            path: "https://wa.me/919899866655",
        },
        {
            title: "instagram",
            icon: instagram,
            path: "https://www.instagram.com/gramieno_/",
        },
        {
            title: "facebook",
            icon: facebook,
            path: "https://www.facebook.com/profile.php?id=100064278001685&ref=py_c",
        },
    ];

    const footerLinks = [
        {
            title: "Cancellation / Refund Policy",
            path: "/cancellation-refund-policy",
        },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Terms & Conditions", path: "/terms-conditions" },
        { title: "Shipping Policy", path: "/shipping-policy" },
    ];
    const labelStyle = `block mb-2 text-[16px] font-medium text-white mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    return (
        <div className="w-full py-4 sm:mt-10 mt-8 " id="contact">
            <div className="w-full flex justify-center items-center">
                <div className="sm:w-8/12 w-10/12 sm:h-[3px] h-[1px] bg-white rounded-xl"></div>
            </div>
            <div className="w-full flex sm:flex-row flex-col">
                <div className="sm:w-4/12 w-full sm:p-12 p-4 flex flex-col items-center">
                    <h1 className="sm:text-[18px] text-[16px] text-white text-center">
                        connect@gramieno.com
                    </h1>
                    <button
                        id="contact"
                        className="sm:mt-20 mt-8 flex py-4 px-8 border-2 border-white rounded-xl sm:text-[18px] text-[16px] text-white hover:text-black hover:bg-white"
                        onClick={() => setOpen(!open)}
                    >
                        Contact Us
                    </button>
                </div>
                <div className="sm:w-4/12 w-full sm:p-12 p-4 flex flex-col gap-4">
                    {footerLinks.map((link, index) => {
                        return (
                            <button
                                className="sm:text-[18px] text-[16px] text-white sm:text-left"
                                key={index}
                                onClick={() => navigate(link.path)}
                            >
                                {link.title}
                            </button>
                        );
                    })}
                </div>
                <div className="sm:w-4/12 w-full sm:p-12 p-4 sm:mt-0 mt-8">
                    <h1 className="sm:text-[18px] text-[16px] text-white text-center font-bold">
                        Gramien’O by
                    </h1>
                    <h1 className="sm:text-[18px] text-[16px] text-white text-center font-bold">
                        ANANDSHIVA VILLAGEMART
                    </h1>
                    <div className="flex mt-8 gap-12 w-full justify-center">
                        {socialIcons.map((icon, index) => {
                            return (
                                <img
                                    key={index}
                                    src={icon.icon}
                                    alt={icon.title}
                                    className="sm:w-[3rem] w-[2.5rem] cursor-pointer"
                                    {...(icon.path && {
                                        onClick: () => {
                                            window.open(icon.path, "_blank");
                                        },
                                    })}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Modal
                visible={open}
                width="90%"
                height="90%"
                effect="fadeInUp"
                onClickAway={() => setOpen(!open)}
            >
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4 sm:gap-4 gap-2">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setOpen(!open);
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
                            className="text-white bg-blue-700 w-full my-8 text-[16px] py-2 rounded-lg hover:bg-blue-800 about-font"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Footer;
