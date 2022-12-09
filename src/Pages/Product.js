import React from "react";
import { Navbar, Footer, ProductCard } from "../Components";
import table from "../Assets/Images/table.png";
import table1 from "../Assets/Images/table1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
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
    const btnClass = `flex w-32 py-2 px-4 h-[50px] justify-center items-center border-2 border-white rounded-xl text-[14px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font`;
    return (
        <div className="back">
            <Navbar />
            <div className="w-full flex flex-col sm:px-24 px-4">
                <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-8">
                    <div className="sm:w-1/2 w-full flex gap-16">
                        <div className="flex flex-col w-full gap-4">
                            <img
                                src={table}
                                alt="table"
                                className="w-full rounded-2xl"
                            />
                            <div className="flex w-full gap-4 justify-center">
                                <img
                                    src={table}
                                    alt="table"
                                    className="w-20 h-20 rounded-2xl"
                                />
                                <img
                                    src={table}
                                    alt="table"
                                    className="w-20 h-20 rounded-2xl"
                                />
                                <img
                                    src={table}
                                    alt="table"
                                    className="w-20 h-20 rounded-2xl"
                                />
                                <img
                                    src={table}
                                    alt="table"
                                    className="w-20 h-20 rounded-2xl"
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="sm:w-1/2 w-full flex flex-col text-white gap-12 ">
                        <h1 className="font-bold text-[20px]">
                            Multipurpose Portable Table (Yellow-Orange)
                        </h1>
                        <div className="pl-4">
                            <h1>
                                &bull; Ideal for professionals(WFH) & College
                                Students
                            </h1>
                            <h1>
                                &bull; Separate section for laptop, notepad and
                                mobile
                            </h1>
                            <h1>
                                &bull; Adjustable at 5 different angles for ease
                                of operation
                            </h1>
                            <h1>
                                &bull; Easy to carry (3.5 kgs) 25 inches (L) x
                                14.5 inches (B) x 9.5 inches (H)
                            </h1>
                        </div>
                        <h1 className="pl-4 font-bold text-[20px]">
                            ₹ 2250.00
                        </h1>
                        <div className="w-full flex gap-4 justify-center sm:justify-start">
                            <button className={btnClass}>Add to Cart</button>
                            <button className={btnClass}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex sm:flex flex-col-reverse mt-24 sm:gap-0 gap-8">
                    <div className="sm:w-1/2 w-full flex flex-col text-white sm:gap-12 gap:8">
                        <h1 className="font-bold text-[20px]">
                            More Details About the Product
                        </h1>
                        <h1>Ideal for professionals(WFH) & College Students</h1>
                        <div className="pl-4">
                            <h1>
                                &bull; Separate section for laptop, notepad and
                                mobile
                            </h1>
                            <h1>
                                &bull; Adjustable at 5 different angles for ease
                                of operation
                            </h1>
                            <h1>
                                &bull; Easy to carry (3.5 kgs) 25 inches (L) x
                                14.5 inches (B) x 9.5 inches (H)
                            </h1>
                            <h1>
                                &bull; Ghana Teak base for sturdiness and
                                durability{" "}
                            </h1>
                            <h1>
                                &bull; Recycled wood melamine coated top for
                                elegant finish
                            </h1>
                        </div>
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <Carousel
                            responsive={responsive1}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            transitionDuration={700}
                            className="w-full pl-36"
                            showDots={false}
                            arrows={false}
                        >
                            <img
                                src={table}
                                alt="table"
                                className="w-96 h-72 rounded-2xl"
                            />
                            <img
                                src={table1}
                                alt="table"
                                className="w-96 h-72 rounded-2xl"
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1 className="font-bold text-white my-12 px-12 text-[26px]">
                    Woodwork Products
                </h1>
                <Carousel
                    responsive={responsive}
                    className="px-12"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    transitionDuration={700}
                >
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                </Carousel>
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1 className="font-bold text-white my-12 px-12 text-[26px]">
                    Woodwork Products
                </h1>
                <Carousel
                    responsive={responsive}
                    className="px-12"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    transitionDuration={700}
                >
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                </Carousel>
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1 className="font-bold text-white my-12 px-12 text-[26px]">
                    Woodwork Products
                </h1>
                <Carousel
                    responsive={responsive}
                    className="px-12"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    transitionDuration={700}
                >
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                </Carousel>
            </div>
            <Footer />
        </div>
    );
};

export default Product;