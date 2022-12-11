import React from "react";
import "../Assets/CSS/index.css";

const TestimonialCard = ({ text }) => {
    return (
        <div className="w-[20rem] drop-shadow-2xl about-font rounded-2xl zoom  side-nav min-h-84 px-4 py-8">
            <h1 className="text-center text-white">{text}</h1>
        </div>
    );
};

export default TestimonialCard;
