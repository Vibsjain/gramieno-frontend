import React from "react";
import "../Assets/CSS/index.css";

const HeroAnimate = () => {
    const images = [
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1672390075/Main_ait5dc.jpg",
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1672389915/One_fyszpj.jpg",
        "https://res.cloudinary.com/dzvapad5s/image/upload/v1674667307/IMG_0494_mn2fce.jpg",
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1672390075/Three_qhz40o.jpg",
    ];
    return (
        <div className="flex w-full justify-center">
            <ul className="hero flex w-full justify-center mt-[-8px]">
                {images.map((image, index) => (
                    <li className="hero" key={index}>
                        <img
                            src={image}
                            alt={`hero${index}`}
                            className="w-[87vw] h-[60vh]  rounded-2xl"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroAnimate;
