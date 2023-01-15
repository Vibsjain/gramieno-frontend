import React, { useState } from "react";

const Discount = () => {
    const [woodDiscount, setWoodDiscount] = useState(10);
    const [incenseDiscount, setIncenseDiscount] = useState(10);
    const [roseDiscount, setRoseDiscount] = useState(10);
    const [woodEdit, setWoodEdit] = useState(false);
    const [incenseEdit, setIncenseEdit] = useState(false);
    const [roseEdit, setRoseEdit] = useState(false);
    return (
        <div className="w-full sm:px-24 px-4 mt-24 about-font">
            <div className="bg-[#141C2F] rounded-2xl min-h-[70vh]">
                <div>
                    <h1 className="text-3xl text-white text-center pt-10">
                        Discount
                    </h1>
                </div>
                <div className="w-full px-8">
                    <h1 className="text-white">Current Discount </h1>
                    <br />
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[rgb(16,22,36)] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Active Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Discount %
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#1E293B] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        <div className="w-4 h-4 rounded-full bg-[#008000]"></div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                    >
                                        Wooden Works
                                    </th>
                                    <td className="px-6 py-4">
                                        {woodEdit === false ? (
                                            <p>{woodDiscount}%</p>
                                        ) : (
                                            <input
                                                type="text"
                                                className="w-20 px-2 py-1 rounded-md text-black"
                                                value={woodDiscount}
                                                onChange={(e) => {
                                                    setWoodDiscount(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {woodEdit === false ? (
                                            <button
                                                className="bg-[#FBBF24] text-white px-4 py-2 rounded-md"
                                                onClick={() => {
                                                    setWoodEdit(!woodEdit);
                                                }}
                                            >
                                                Edit
                                            </button>
                                        ) : (
                                            <div className="flex gap-2">
                                                <button
                                                    className="bg-[#FF0000] text-white px-4 py-2 rounded-md"
                                                    onClick={() => {
                                                        setWoodEdit(!woodEdit);
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="bg-[#008000] text-white px-4 py-2 rounded-md"
                                                    onClick={() => {
                                                        setWoodEdit(!woodEdit);
                                                    }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                <tr className="bg-[#1E293B] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        <div className="w-4 h-4 rounded-full bg-[#008000]"></div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                    >
                                        Incense Sticks
                                    </th>
                                    <td className="px-6 py-4">10%</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-[#FBBF24] text-white px-4 py-2 rounded-md">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-[#1E293B] text-white dark:bg-gray-900 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        <div className="w-4 h-4 rounded-full bg-[#FF0000]"></div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                    >
                                        Rose Pack
                                    </th>
                                    <td className="px-6 py-4">10%</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-[#FBBF24] text-white px-4 py-2 rounded-md">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
