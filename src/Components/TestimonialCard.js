import React from "react";
import "../Assets/CSS/index.css";

const TestimonialCard = ({ text, name }) => {
    return (
        <div className="flex flex-col justify-between w-[17rem] drop-shadow-2xl about-font rounded-2xl zoom bg-[#B89C7D] min-h-84 px-4 py-8">
            <div className="flex flex-col justify-center h-[90%]">
                <h1 className="text-center text-white text-sm">{text}</h1>
            </div>
            <h1 className="mt-12 text-white font-bold text-right italic">
                {" "}
                - {name}
            </h1>
        </div>
    );
};

export default TestimonialCard;
