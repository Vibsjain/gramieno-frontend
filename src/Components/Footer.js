import React from "react";
import whatsapp from "../Assets/Images/whatsapp.png";
import instagram from "../Assets/Images/instagram.webp";
import facebook from "../Assets/Images/facebook.png";

const Footer = () => {
    return (
        <div className="w-full py-4 my-24">
            <div className="w-full flex justify-center items-center">
                <div className="w-8/12 h-[3px] bg-white rounded-xl"></div>
            </div>
            <div className="w-full flex ">
                <div className="w-4/12 p-12 flex flex-col items-center">
                    <h1 className="text-[26px] text-white text-center">
                        connect@gramieno.com
                    </h1>
                    <button className="mt-20 flex py-6 px-12 border-2 border-white rounded-xl text-[26px] text-white hover:text-black hover:bg-white">
                        Contact Us
                    </button>
                </div>
                <div className="w-4/12 p-12 flex flex-col gap-4">
                    <button className="text-[26px] text-white text-left">
                        Cancellation / Refund Policy
                    </button>
                    <button className="text-[26px] text-white text-left">
                        Privacy Policy
                    </button>
                    <button className="text-[26px] text-white text-left">
                        Terms {`&`} Conditions
                    </button>
                    <button className="text-[26px] text-white text-left">
                        Shipping Policy
                    </button>
                </div>
                <div className="w-4/12 p-12">
                    <h1 className="text-[26px] text-white text-center font-bold">
                        Gramien’O by
                    </h1>
                    <h1 className="text-[26px] text-white text-center font-bold">
                        ANANDSHIVA VILLAGEMART
                    </h1>
                    <div className="flex mt-8 gap-12 w-full justify-center">
                        <img
                            src={whatsapp}
                            alt="whatsapp"
                            className="w-[3.5rem]"
                        />
                        <img
                            src={instagram}
                            alt="instagram"
                            className="w-[3.5rem]"
                        />
                        <img
                            src={facebook}
                            alt="facebook"
                            className="w-[3.5rem]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
