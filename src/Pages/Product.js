import React, { useContext, useEffect } from "react";
import { Navbar, Footer, Slider } from "../Components";
import table from "../Assets/Images/table.png";
import table1 from "../Assets/Images/table1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../Assets/Constants";
import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
    AOS.init();
    const { id } = useParams();
    const { product, getProduct } = useContext(ProductContext);
    useEffect(() => {
        getProduct(id);
        console.log(id);
        console.log(product);
        // eslint-disable-next-line
    }, []);
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const btnClass = buyBtn;
    return (
        <div className="back">
            <Navbar />
            <div className="w-full flex flex-col sm:px-24 px-4">
                <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-8">
                    <div className="sm:w-1/2 w-full flex gap-16">
                        <div className="flex flex-col w-full gap-4 items-center">
                            <img
                                src={product.images ? product.images[0] : table}
                                alt="table"
                                className="w-96 rounded-2xl"
                                data-aos="zoom-in"
                            />
                            <div
                                className="flex w-full gap-4 justify-center"
                                data-aos="zoom-in"
                            >
                                {product.images
                                    ? product.images.map((image, index) => (
                                          <img
                                              src={image}
                                              alt="table"
                                              className="w-20 h-20 rounded-2xl"
                                          />
                                      ))
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full flex flex-col text-white gap-12 ">
                        <h1
                            className="font-bold text-[20px]"
                            data-aos="zoom-in"
                        >
                            {product.name
                                ? product.name
                                : "Multipurpose Portable Table (Yellow-Orange)"}
                        </h1>
                        <div className="pl-4" data-aos="zoom-in">
                            <h1 className="text-justify">
                                {product.description}
                            </h1>
                        </div>
                        <h1
                            className="pl-4 font-bold text-[20px]"
                            data-aos="zoom-in"
                        >
                            ₹ {product.price}
                        </h1>
                        <div
                            className="w-full flex gap-4 justify-center sm:justify-start"
                            data-aos="zoom-in"
                        >
                            <button className={btnClass}>Add to Cart</button>
                            <button className={btnClass}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex sm:flex-row flex-col-reverse mt-24 sm:gap-0 gap-8">
                    <div className="sm:w-1/2 w-full flex flex-col text-white sm:gap-12 gap:8">
                        <h1
                            className="font-bold text-[20px]"
                            data-aos="zoom-in"
                        >
                            More Details About the Product
                        </h1>
                        <div className="px-4">
                            <h1 className="text-justify" data-aos="zoom-in">
                                {product.description}
                            </h1>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <Carousel
                            responsive={responsive1}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            transitionDuration={700}
                            className="w-full"
                            showDots={false}
                            arrows={false}
                        >
                            {product.images ? (
                                product.images.map((image, index) => (
                                    <img
                                        src={image}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                ))
                            ) : (
                                <img
                                    src={table1}
                                    alt="table"
                                    className="w-96 h-72 rounded-2lg"
                                    data-aos="zoom-in"
                                />
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-12 text-[26px]"
                    data-aos="zoom-in"
                >
                    Woodwork Products
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-12 text-[26px]"
                    data-aos="zoom-in"
                >
                    Woodwork Products
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-12 text-[26px]"
                    data-aos="zoom-in"
                >
                    Woodwork Products
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <Footer data-aos="zoom-in" />
        </div>
    );
};

export default Product;
