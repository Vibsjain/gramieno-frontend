import React, { useState, useEffect, useContext } from "react";
import {
    Navbar,
    Footer,
    ProductCard,
    ProductAnimate,
    SnackBar,
} from "../Components";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductContext from "../Context/ProductContext";

const Products = () => {
    const { products, getProducts, snack } = useContext(ProductContext);
    AOS.init();
    const navButtonStyle = `sm:min-w-36 min-w-64 text-center border border-white rounded py-2 px-4`;
    const navChosesStyle = `bg-white text-black`;
    const navHoverStyle = `back text-white hover:bg-white hover:text-black`;
    const [data, setData] = useState([]);
    const [woodenTab, setWoodenTab] = useState(false);
    const [incenseTab, setIncenseTab] = useState(false);
    const [roseTab, setRoseTab] = useState(false);
    const [allTab, setAllTab] = useState(true);
    const clearAll = () => {
        setWoodenTab(false);
        setIncenseTab(false);
        setRoseTab(false);
        setAllTab(false);
    };
    useEffect(() => {
        getProducts();
        setData(products);
        console.log(products);
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="back">
            <SnackBar text={snack.text} visible={snack.visible} />
            <Navbar />
            {/* Product Hero Section */}
            <div className="sm:hidden flex py-2 " data-aos="zoom-in">
                <h1 className="bg-white w-full text-center mx-4 rounded-lg font-bold text-[20px] py-4">
                    Products
                </h1>
            </div>
            <div className="my-8 sm:px-24 px-8 rounded-2xl" data-aos="zoom-in">
                <ProductAnimate />
            </div>

            {/* Products */}
            <div className="mt-[120vh] sm:mt-[90vh]">
                {/* Products Navigation */}
                <div
                    className="flex w-full sm:px-36 px-12 justify-center items-center"
                    data-aos="zoom-in"
                >
                    <ul class="flex flex-wrap gap-4 justify-center">
                        <li>
                            <button
                                class={`${navButtonStyle} ${
                                    allTab ? navChosesStyle : navHoverStyle
                                }`}
                                onClick={() => {
                                    clearAll();
                                    setAllTab(true);
                                    setData(products);
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
                                    setData(
                                        products.filter(
                                            (product) =>
                                                product.category ===
                                                "Wooden Works"
                                        )
                                    );
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
                                    setData(
                                        products.filter(
                                            (product) =>
                                                product.category ===
                                                "Incense Sticks"
                                        )
                                    );
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
                                    setData(
                                        products.filter(
                                            (product) =>
                                                product.category === "Rose"
                                        )
                                    );
                                }}
                            >
                                Rose Pack
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Product Cards */}
                <div className="flex flex-wrap w-full px-8 my-24 gap-12 justify-center ">
                    {data?.map((product, index) => (
                        <div data-aos="zoom-in">
                            <ProductCard
                                id={product._id}
                                key={index}
                                item={product.name}
                                price={product.price}
                                image1={product.image1}
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
