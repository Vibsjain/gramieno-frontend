import React from "react";
import whatsapp from "../Assets/Images/whatsapp.png";
import instagram from "../Assets/Images/instagram.webp";
import facebook from "../Assets/Images/facebook.png";

const Footer = () => {
    const socialIcons = [
        { title: "whatsapp", icon: whatsapp },
        { title: "instagram", icon: instagram },
        { title: "facebook", icon: facebook },
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
    return (
        <div className="w-full py-4 sm:my-10 my-8">
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
                    >
                        Contact Us
                    </button>
                </div>
                <div className="sm:w-4/12 w-full sm:p-12 p-4 flex flex-col gap-4">
                    {footerLinks.map((link) => {
                        return (
                            <button className="sm:text-[18px] text-[16px] text-white sm:text-left">
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
                        {socialIcons.map((icon) => {
                            return (
                                <img
                                    src={icon.icon}
                                    alt={icon.title}
                                    className="sm:w-[3rem] w-[2.5rem]"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
