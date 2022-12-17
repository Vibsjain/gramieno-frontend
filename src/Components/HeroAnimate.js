import React from "react";
import One from "../Assets/Images/HeroImages/One.jpg";
import Two from "../Assets/Images/HeroImages/Two.jpg";
import Three from "../Assets/Images/HeroImages/Three.jpg";
import Main from "../Assets/Images/HeroImages/Main.jpg";
import "../Assets/CSS/index.css";

const HeroAnimate = () => {
    return (
        <div className="flex w-full justify-center">
            <ul className="hero flex w-full justify-center">
                <li className="hero">
                    <img src={Main} alt = "hero" className="w-[90vw] h-[85vh]  rounded-2xl" />
                </li>
                <li className="hero">
                    <img src={One} alt = "hero" className="w-[90vw] h-[85vh]  rounded-2xl" />
                </li>
                <li className="hero">
                    <img src={Two} alt = "hero" className="w-[90vw] h-[85vh]  rounded-2xl" />
                </li>
                <li className="hero">
                    <img src={Three} alt = "hero" className="w-[90vw] h-[85vh]  rounded-2xl" />
                </li>
            </ul>
        </div>
    );
};

export default HeroAnimate;
