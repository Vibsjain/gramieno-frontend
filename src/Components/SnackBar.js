import React from "react";
import "../Assets/CSS/index.css";

const SnackBar = ({ text, visible }) => {
    return (
        <div
            className={`w-full h-24 fixed bottom-4 left-4 z-[10000] w-64 container ${
                visible ? "flex" : "hidden"
            } `}
        >
            <div className="w-64 border h-full bg-[#FD8E40] rounded-lg flex justify-center items-center gradient">
                <h1 className="text-center font-bold">{text}</h1>
            </div>
        </div>
    );
};

export default SnackBar;
