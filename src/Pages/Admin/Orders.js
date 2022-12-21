import React, { useState, useEffect, useContext } from "react";
import { adminShowBtn, tableHeadStyle } from "../../Assets/Constants";
import OrderModal from "./OrderModal";
import ProductContext from "../../Context/ProductContext";

const Orders = () => {
    const { orders, getOrders, products, getProducts } =
        useContext(ProductContext);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const headStyle = tableHeadStyle;
    const data = [
        {
            product: "Apple MacBook Pro 17",
            name: "John Dow",
        },
        {
            product: "Apple MacBook Pro 17",
            name: "John Dow",
        },
        {
            product: "Apple MacBook Pro 17",
            name: "John Dow",
        },
        {
            product: "Apple MacBook Pro 17",
            name: "John Dow",
        },
    ];
    useEffect(() => {
        getOrders();
        getProducts();
    }, []);
    return (
        <div className="sm:px-24 px-4 mt-12 about-font">
            <OrderModal open={open} setOpen={setOpen} id={id} />
            <div className="overflow-x-auto relative rounded-2xl">
                <table className="w-full text-[16px] text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white  bg-[rgb(20,28,47)] py-2 px-2">
                        <tr>
                            <th scope="col" className={headStyle}>
                                Person
                            </th>
                            <th
                                scope="col"
                                className={`${headStyle} sm:flex hidden`}
                            >
                                Delivery Status
                            </th>
                            <th
                                scope="col"
                                className={`${headStyle} text-center`}
                            >
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, index) => (
                            <tr
                                className={`text-white bg-[#192335] border-b ${
                                    index % 2 === 0
                                        ? "bg-[#F9FAFB]"
                                        : "bg-white"
                                }}`}
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-8 font-medium whitespace-nowrap about-font text-[14px]"
                                >
                                    {item.shippingAddress.fullName}{" "}
                                </th>
                                <td className="py-4 px-8 about-font text-[14px] hidden sm:flex">
                                    {item.isDelivered ? (
                                        <span className="font-bold text-green-500">
                                            Delivered
                                        </span>
                                    ) : (
                                        <span className="font-bold text-red-500">
                                            Not Delivered
                                        </span>
                                    )}
                                </td>
                                <td className="py-4 px-8 text-center">
                                    <button
                                        className={adminShowBtn}
                                        onClick={() => {
                                            setId(item._id);
                                            setOpen(true);
                                        }}
                                    >
                                        Show More
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
