import React, { useState } from "react";
import { Navbar, Footer, ProductCard } from "../Components";
import table from "../Assets/Images/table.png";
import Logo from "../Assets/Images/logo.png";
import { buyBtn } from "../Assets/Constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
    AOS.init();
    const navButtonStyle = `sm:min-w-36 min-w-64 text-center border border-white rounded py-2 px-4`;
    const navChosesStyle = `bg-white text-black`;
    const navHoverStyle = `back text-white hover:bg-white hover:text-black`;
    const btnClass = buyBtn;
    const [data, setData] = useState([]);
    const [woodenTab, setWoodenTab] = useState(false);
    const [incenseTab, setIncenseTab] = useState(false);
    const [roseTab, setRoseTab] = useState(false);
    const [allTab, setAllTab] = useState(true);
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
            <div className="my-8 sm:px-24 px-8 rounded-2xl" data-aos="zoom-in">
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
                <div
                    className="flex w-full sm:px-36 px-12 justify-center items-center"
                    data-aos="zoom-in"
                >
                    <ul class="flex sm:flex-row flex-col gap-4">
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
                    </ul>
                </div>

                {/* Product Cards */}
                <div className="flex flex-wrap w-full px-8 my-24 gap-12 justify-center ">
                    {products?.map((product, index) => (
                        <div data-aos = "zoom-in">
                            <ProductCard
                                key={index}
                                item={product.item}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
