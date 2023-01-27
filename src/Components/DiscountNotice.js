import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import api from "../api";

const DiscountNotice = () => {
    const [show, setShow] = useState(true);
    const [discounts, setDiscounts] = useState([]);
    const getDiscounts = async () => {
        const response = await api.get("/discounts");
        setDiscounts(response.data);
    };

    useEffect(() => {
        getDiscounts();
        console.log(discounts);
    }, []);
    return (
        <div className="border-b">
            {show && (
                <div className="w-full min-h-[3rem] py-4 px-4 bg-white text-black">
                    <div className="flex items-center justify-start items-between">
                        <div className="w-full flex flex-col gap-2 justify-center">
                            {discounts[0] && (
                                <div>
                                    {discounts[0].active ||
                                    discounts[1].active ||
                                    discounts[2].active ? (
                                        discounts.map((discount, index) => {
                                            return (
                                                <div key={index}>
                                                    {discount.active && (
                                                        <div className="flex items-center">
                                                            <div className="w-2 h-2 bg-[#F2C94C] rounded-full"></div>
                                                            <div className="ml-2 text-sm font-bold">
                                                                {
                                                                    discount.discountPercent
                                                                }
                                                                % discount on
                                                                Minimum Purchase
                                                                of Rs.
                                                                {discount.minPurchase.toLocaleString()}{" "}
                                                                on{" "}
                                                                {discount.category ===
                                                                0
                                                                    ? "Wooden Works"
                                                                    : discount.category ===
                                                                      1
                                                                    ? "Incense Sticks"
                                                                    : "Rose Packs"}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-[#F2C94C] rounded-full"></div>
                                            <div className="ml-2 text-sm">
                                                No Discount Available
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-end gap-4 ">
                            <AiOutlineClose
                                className="text-2xl cursor-pointer"
                                onClick={() => setShow(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiscountNotice;
