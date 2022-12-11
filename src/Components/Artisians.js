import React from "react";

const Artisians = ({ title, image, details }) => {
    return (
        <div className="w-full flex flex-col items-center gap-[2rem] py-2 bg-[#545454] rounded-2xl drop-shadow-2xl justify-between">
            <div className="flex flex-col justify-end h-24">
                <h1 className="text-white text-center text-[20px] font-bold px-20 mt-4">
                    {title}
                </h1>
            </div>
            <div className="flex justify-center items-center sm:px-20 px-4 ">
                <img src={image} alt="artisan" className="w-full h-full rounded-xl" />
            </div>
            <div className="flex ">
                <h1 className="text-white text-[14px] sm:px-20 px-4 text-justify">{details}</h1>
            </div>
            <button className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[16px] text-white hover:text-black hover:bg-white text-center my-4">
                Visit Store
            </button>
        </div>
    );
};

export default Artisians;
