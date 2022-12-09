import React, { useState } from "react";
import { Navbar, Footer, ProductCard } from "../Components";
import table from "../Assets/Images/table.png";
import Logo from "../Assets/Images/logo.png";

const Products = () => {
    const navButtonStyle = `sm:w-36 w-64 text-center blok border border-white rounded py-2 px-4`;
    const navChosesStyle = `bg-white text-black`;
    const navHoverStyle = `back text-white hover:bg-white hover:text-black`;
    const btnClass = `flex w-32 py-2 px-4 h-[50px] justify-center items-center border-2 border-white rounded-xl text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font`;
    const [data, setData] = useState([]);
    const [woodenTab, setWoodenTab] = useState(true);
    const [incenseTab, setIncenseTab] = useState(false);
    const [roseTab, setRoseTab] = useState(false);
    const [allTab, setAllTab] = useState(false);
    const [products, setProducts] = useState([
        {
            id: 1,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 2,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 1,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 2,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 1,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 2,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 1,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
        {
            id: 2,
            item: "Wooden Works",
            image: table,
            price: 100,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        },
    ]);
    const clearAll = () => {
        setWoodenTab(false);
        setIncenseTab(false);
        setRoseTab(false);
        setAllTab(false);
    };
    return (
        <div className="back">
            <Navbar />
            {/* Product Hero Section */}
            <div className="my-8 sm:px-24 px-8 rounded-2xl">
                <div className="w-full flex sm:flex-row flex-col rounded-2xl">
                    <div className="sm:w-7/12 w-full rounded-2xl">
                        <img
                            src={table}
                            alt="product"
                            className="w-full h-full sm:rounded-t-[0px] sm:rounded-b-[0px] sm:rounded-tl-2xl sm:rounded-bl-2xl rounded-t-2xl"
                        />
                    </div>
                    <div className="sm:w-5/12 w-full sm:py-0 py-8 flex flex-col justify-center items-center gap-4 bg-white sm:rounded-t-[0px] sm:rounded-tr-2xl rounded-br-2xl sm:rounded-bl-[0px] rounded-bl-2xl ">
                        <img src={Logo} />
                        <h1 className="sm:px-12 px-8 font-bold text-[18px]">
                            Village Mart for the Urban Heart
                        </h1>
                        <h1 className="sm:px-16 px-12">
                            Chhotu, Rakesh & Buddhu are excellent craftsmen and
                            their Ability to convert an idea into finished
                            products is unmatched.
                        </h1>
                        <button className={btnClass}>Shop Now</button>
                    </div>
                </div>
            </div>
            {/* Products */}
            <div className="mt-24">
                {/* Products Navigation */}
                <div className="flex w-full sm:px-36 px-12 justify-center items-center">
                    <ul class="flex sm:flex-row flex-col gap-4">
                        <li>
                            <button
                                class={`${navButtonStyle} ${
                                    woodenTab ? navChosesStyle : navHoverStyle
                                }`}
                                onClick={() => {
                                    clearAll();
                                    setWoodenTab(true);
                                }}
                            >
                                Wooden Works
                            </button>
                        </li>
                        <li>
                            <button
                                class={`${navButtonStyle} ${
                                    incenseTab ? navChosesStyle : navHoverStyle
                                }`}
                                onClick={() => {
                                    clearAll();
                                    setIncenseTab(true);
                                }}
                            >
                                Incense Sticks
                            </button>
                        </li>
                        <li>
                            <button
                                class={`${navButtonStyle} ${
                                    roseTab ? navChosesStyle : navHoverStyle
                                }`}
                                onClick={() => {
                                    clearAll();
                                    setRoseTab(true);
                                }}
                            >
                                Rose Pack
                            </button>
                        </li>
                        <li>
                            <button
                                class={`${navButtonStyle} ${
                                    allTab ? navChosesStyle : navHoverStyle
                                }`}
                                onClick={() => {
                                    clearAll();
                                    setAllTab(true);
                                }}
                            >
                                All
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Product Cards */}
                <div className="flex flex-wrap w-full px-8 my-24 gap-12 justify-center ">
                    {products?.map((product, index) => (
                        <ProductCard
                            key={index}
                            item={product.item}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
