import React, { useState } from "react";
import { Navbar, Footer, ProductCard } from "../Components";
import table from "../Assets/Images/table.png";
import Logo from "../Assets/Images/logo.png";

const Products = () => {
    const navButtonStyle = `w-36 text-center blok border border-white rounded py-2 px-4`;
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
            <div className="my-8 px-24 rounded-2xl">
                <div className="w-full flex rounded-2xl">
                    <div className="w-7/12 rounded-2xl">
                        <img
                            src={table}
                            alt="product"
                            className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
                        />
                    </div>
                    <div className="w-5/12 flex flex-col justify-center items-center gap-4 bg-white rounded-tr-2xl rounded-br-2xl">
                        <img src={Logo} />
                        <h1 className="px-12 font-bold text-[18px]">
                            Village Mart for the Urban Heart
                        </h1>
                        <h1 className="px-16">
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
                <div className="flex w-full px-36 justify-center items-center">
                    <ul class="flex gap-4">
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
