import React from "react";
import "../Assets/CSS/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SnackBar = ({ text, visible }) => {
    AOS.init();
    return (
        <div
            className={`w-full h-24 fixed bottom-4 left-4 z-[10000] w-64 ${
                visible ? "flex" : "hidden"
            } `}
            data-aos="fade-up"
            data-aos-duration="400"
        >
            <div className="w-64 h-full bg-[#323232] rounded-lg flex justify-center items-center">
                <h1 className="text-center text-white">{text}</h1>
            </div>
        </div>
    );
};

export default SnackBar;
