import React from "react";

const Product = () => {
    const headStyle = `text-[18px] py-8 px-8`;
    const data = [
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
        {
            name: "Apple MacBook Pro 17",
            price: "$2999",
        },
    ];
    return (
        <div className="px-24 mt-12">
            <div className="overflow-x-auto relative rounded-2xl">
                <table className="w-full text-[16px] text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white  bg-[rgb(20,28,47)] py-2 px-2">
                        <tr>
                            <th scope="col" className={headStyle}>
                                Product
                            </th>
                            <th scope="col" className={headStyle}>
                                Price
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
                        {data.map((item, index) => (
                            <tr
                                className={`text-white bg-[#192335] border-b ${
                                    index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                                }}`}
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-8 font-medium whitespace-nowrap"
                                >
                                    {item.name}
                                </th>
                                <td className="py-4 px-8">{item.price}</td>
                                <td className="py-4 px-8 text-center">
                                    <button className="bg-[#141C2F] px-4 py-2 rounded-xl hover:text-black">
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

export default Product;
