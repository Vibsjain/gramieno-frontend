import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import api from "../api";
import Discount from "../Pages/Admin/Discount";

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
        const open = false;
        if (discounts.length !== 0) {
            for (let i = 0; i < discounts.length; i++) {
                if (discounts[i].active) {
                    open = true;
                }
            }
        }
    }, []);
    return (
        <div>
            {show && (
                <div className="w-full min-h-[3rem] py-4 px-4 bg-[#72562C]">
                    <div className="flex items-center justify-start items-between">
                        <div className="w-full flex flex-col gap-2 justify-center">
                            {discounts[0] && (
                                <div>
                                    {discounts[0].active ||
                                    discounts[1].active ||
                                    discounts[2].active ? (
                                        discounts.map((discount, index) => {
                                            return (
                                                <div key = {index}>
                                                    {discount.active && (
                                                        <div className="flex items-center">
                                                            <div className="w-2 h-2 bg-[#F2C94C] rounded-full"></div>
                                                            <div className="ml-2 text-sm text-white">
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
                                            <div className="ml-2 text-sm text-white">
                                                No Discount Available
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="w-full flex items-center justify-end">
                            <AiOutlineClose
                                className="text-white text-2xl cursor-pointer"
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
