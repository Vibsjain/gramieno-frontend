import React from "react";

const Artisians = ({ title, image, details }) => {
    return (
        <div className="w-full flex flex-col items-center gap-12 py-8 bg-[#545454] min-h-full rounded-2xl drop-shadow-2xl">
            <div className="flex flex-col justify-end h-24">
                <h1 className="text-white text-center text-[20px] font-bold px-20 mt-12">
                    {title}
                </h1>
            </div>
            <div className="flex justify-center items-center px-20 mt-2">
                <img src={image} alt="artisan" className="w-full h-full" />
            </div>
            <div className="flex min-h-[12rem]">
                <h1 className="text-white text-[14px] px-20 mt-4">{details}</h1>
            </div>
            <button className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[16px] text-white hover:text-black hover:bg-white text-center">
                Visit Store
            </button>
        </div>
    );
};

export default Artisians;
