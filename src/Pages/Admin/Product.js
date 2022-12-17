import React, { useState, useEffect, useContext } from "react";
import { adminShowBtn, tableHeadStyle } from "../../Assets/Constants";
import ProductModal from "./ProductModal";
import ProductContext from "../../Context/ProductContext";

const Product = () => {
    const { products, getProducts } = useContext(ProductContext);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const headStyle = tableHeadStyle;
    const [data, setData] = useState([
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
    ]);
    useEffect(() => {
        getProducts();
        setData(products);
        // eslint-disable-next-line
    },[]);
    return (
        <div className="sm:px-24 px-4 mt-12">
            <ProductModal open={open} setOpen={setOpen} id={id} />
            <div className="overflow-x-auto relative rounded-2xl">
                <table className="w-full text-[16px] text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white  bg-[rgb(20,28,47)] py-2 px-2">
                        <tr>
                            <th scope="col" className={headStyle}>
                                Product
                            </th>
                            <th scope="col" className={`${headStyle} sm:flex hidden`}>
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
                                    index % 2 === 0
                                        ? "bg-[#F9FAFB]"
                                        : "bg-white"
                                }}`}
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-8 font-medium whitespace-nowrap about-font"
                                >
                                    {item.name}
                                </th>
                                <td className="py-4 px-8 about-font sm:flex hidden">
                                    {item.price}
                                </td>
                                <td className="py-4 px-8 text-center">
                                    <button
                                        className={adminShowBtn}
                                        onClick={() => {
                                            setId(item._id);
                                            setOpen(!open);
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

export default Product;
