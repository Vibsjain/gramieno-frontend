import React from "react";
import "../Assets/CSS/index.css";

const HeroAnimate = () => {
    return (
        <div className="flex w-full justify-center">
            <ul className="hero flex w-full justify-center mt-[-8px]">
                <li className="hero">
                    <img
                        src="https://res.cloudinary.com/dumgn8uvd/image/upload/v1672390075/Main_ait5dc.jpg"
                        alt="hero"
                        className="w-[87vw] h-[60vh]  rounded-2xl"
                    />
                </li>
                <li className="hero">
                    <img
                        src="https://res.cloudinary.com/dumgn8uvd/image/upload/v1672389915/One_fyszpj.jpg"
                        alt="hero"
                        className="w-[87vw] h-[60vh]  rounded-2xl"
                    />
                </li>
                <li className="hero">
                    <img
                        src="https://res.cloudinary.com/dumgn8uvd/image/upload/v1672389916/Two_xseh4b.jpg"
                        alt="hero"
                        className="w-[87vw] h-[60vh]  rounded-2xl"
                    />
                </li>
                <li className="hero">
                    <img
                        src="https://res.cloudinary.com/dumgn8uvd/image/upload/v1672390075/Three_qhz40o.jpg"
                        alt="hero"
                        className="w-[87vw] h-[60vh]  rounded-2xl"
                    />
                </li>
            </ul>
        </div>
    );
};

export default HeroAnimate;
