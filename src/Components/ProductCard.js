import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard = ({ image, item, details, price }) => {
    const btnClass = `flex w-32 py-2 px-4 h-[50px] justify-center items-center border-2 border-white rounded-xl text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font`;
    return (
        <div className="drop-shadow-2xl about-font">
            <div className="w-[18rem] bg-white h-[18rem] rounded-t-2xl">
                <img src={image} className="rounded-t-2xl h-full w-full "></img>
            </div>
            <div className="flex flex-col gap-4 justify-between w-[18rem] min-h-[10rem] rounded-b-2xl bg-[#FFF]  py-4 z-8">
                <div className="flex w-full justify-between">
                    <h1 className="w-1/2 px-2 text-center font-bold about-font">
                        {item}
                    </h1>
                    <h1 className="w-1/2 px-2 text-center font-bold about-font">
                        {"₹   " + price}
                    </h1>
                </div>
                <h1 className="w-1/2 px-2 text-center text-[13px] font-light about-font text-gray-600">
                    {details}
                </h1>
                <div className="w-full flex min-h-full">
                    <div className="flex w-6/12 justify-center items-center cursor-pointer hover:text-black">
                        <button className={btnClass}>Add to Cart</button>
                    </div>
                    <div className="w-6/12 flex justify-center items-center">
                        <button className={btnClass}>Buy Now</button>
                    </div>
                </div>
                <button className="text-right text-[12px] px-4 about-font">View More Details</button>
            </div>
        </div>
    );
};

export default ProductCard;
