import React, { useState, useContext, useEffect } from "react";
import { Navbar, Footer, Slider, SnackBar } from "../Components";
import table from "../Assets/Images/table.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../Assets/Constants";
import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-awesome-modal";
import { CloseOutlined } from "@ant-design/icons";

const Product = () => {
    AOS.init();
    const navigate = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState("");
    const [open, setOpen] = useState(false);
    const { product, getProduct, setAdded, snack } = useContext(ProductContext);
    useEffect(() => {
        getProduct(id);
        window.scrollTo(0, 0);
        // setImage(product.images[0]);
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
            <SnackBar text={snack.text} visible={snack.visible} />
            <Navbar />
            <Modal
                visible={open}
                width="90%"
                height="90%"
                effect="fadeInUp"
                onClickAway={() => setOpen(!open)}
            >
                <div className="w-full flex flex-col justify-center items-center h-full gap-2">
                    <div className="w-full px-4 flex justify-end items-center">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        />
                    </div>

                    <img
                        src={image ? image : table}
                        className="w-[90%] h-[85%] rounded-xl cursor-pointer"
                        title="Click to zoom"
                    />
                </div>
            </Modal>
            <div className="w-full flex flex-col sm:px-24 px-4">
                {product.name && (
                    <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-8">
                        <div className="sm:w-1/2 w-full flex gap-16 px-4">
                            <div className="flex flex-col w-full gap-4 items-center">
                                <div
                                    className="min-w-96 min-h-84"
                                    onClick={() => {
                                        setImage(image);
                                        setOpen(!open);
                                    }}
                                >
                                    <img
                                        src={image ? image : product.images[0]}
                                        alt="table"
                                        className="w-96 h-80 rounded-2xl"
                                        data-aos="zoom-in"
                                    />
                                </div>
                                <div
                                    className="flex w-full gap-4 justify-center"
                                    data-aos="zoom-in"
                                >
                                    <img
                                        src={
                                            product.images[0]
                                                ? product.images[0]
                                                : table
                                        }
                                        alt="table"
                                        className="w-16 h-16 rounded-lg cursor-pointer"
                                        data-aos="zoom-in"
                                        onClick={() =>
                                            setImage(product.images[0])
                                        }
                                    />
                                    <img
                                        src={
                                            product.images[1]
                                                ? product.images[1]
                                                : table
                                        }
                                        alt="table"
                                        className="w-16 h-16 rounded-lg cursor-pointer"
                                        data-aos="zoom-in"
                                        onClick={() =>
                                            setImage(product.images[1])
                                        }
                                    />
                                    <img
                                        src={
                                            product.images[2]
                                                ? product.images[2]
                                                : table
                                        }
                                        alt="table"
                                        className="w-16 h-16 rounded-lg cursor-pointer"
                                        data-aos="zoom-in"
                                        onClick={() =>
                                            setImage(product.images[2])
                                        }
                                    />
                                    <img
                                        src={
                                            product.images[3]
                                                ? product.images[3]
                                                : table
                                        }
                                        alt="table"
                                        className="w-16 h-16 rounded-lg cursor-pointer"
                                        data-aos="zoom-in"
                                        onClick={() =>
                                            setImage(product.images[3])
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 w-full flex flex-col text-white gap-6 px-4">
                            <h1
                                className="font-bold text-[20px]"
                                data-aos="zoom-in"
                            >
                                {product.name
                                    ? product.name
                                    : "Multipurpose Portable Table (Yellow-Orange)"}
                            </h1>
                            <div className="" data-aos="zoom-in">
                                <h1 className="text-justify">
                                    {product.description}
                                </h1>
                            </div>
                            <h1 className="  text-[20px]" data-aos="zoom-in">
                                <span className="font-bold">Category : </span>{" "}
                                {product.category}
                            </h1>
                            <h1 className=" text-[20px]" data-aos="zoom-in">
                                <span className="font-bold">Dimensions : </span>{" "}
                                {product.length}" x {product.breadth}" x{" "}
                                {product.height}"
                            </h1>
                            <h1
                                className=" font-bold text-[20px]"
                                data-aos="zoom-in"
                            >
                                ₹ {product.price}
                            </h1>
                            <div
                                className="w-full flex gap-4 justify-center sm:justify-start"
                                data-aos="zoom-in"
                            >
                                <button
                                    className={btnClass}
                                    onClick={() => {
                                        const cart = JSON.parse(
                                            localStorage.getItem("cart")
                                        );
                                        if (cart) {
                                            const index = cart.findIndex(
                                                (item) =>
                                                    item.id === product._id
                                            );
                                            if (index !== -1) {
                                                cart[index].quantity += 1;
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify(cart)
                                                );
                                            } else {
                                                cart.push({
                                                    id,
                                                    quantity: 1,
                                                    price: product.price,
                                                });
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify(cart)
                                                );
                                            }
                                        } else {
                                            localStorage.setItem(
                                                "cart",
                                                JSON.stringify([
                                                    {
                                                        id,
                                                        quantity: 1,
                                                        price: product.price,
                                                    },
                                                ])
                                            );
                                        }
                                        setAdded(true);
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className={btnClass}
                                    onClick={() => {
                                        const cart = JSON.parse(
                                            localStorage.getItem("cart")
                                        );
                                        if (cart) {
                                            const index = cart.findIndex(
                                                (item) =>
                                                    item.id === product._id
                                            );
                                            if (index !== -1) {
                                                cart[index].quantity += 1;
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify(cart)
                                                );
                                            } else {
                                                cart.push({
                                                    id,
                                                    quantity: 1,
                                                    price: product.price,
                                                });
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify(cart)
                                                );
                                            }
                                        } else {
                                            localStorage.setItem(
                                                "cart",
                                                JSON.stringify([
                                                    {
                                                        id,
                                                        quantity: 1,
                                                        price: product.price,
                                                    },
                                                ])
                                            );
                                        }
                                        navigate("/checkout");
                                        const orders = cart;
                                        localStorage.setItem(
                                            "orders",
                                            JSON.stringify(orders)
                                        );
                                        console.log(orders);
                                        setAdded(true);
                                    }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full flex sm:flex-row flex-col-reverse mt-24 sm:gap-0 gap-8">
                    <div className="sm:w-1/2 w-full flex flex-col text-white sm:gap-12 gap-8 px-4">
                        <h1
                            className="font-bold text-[20px]"
                            data-aos="zoom-in"
                        >
                            More Details About the Product
                        </h1>
                        <div className="">
                            <h1 className="text-justify" data-aos="zoom-in">
                                {product.description}
                            </h1>
                        </div>
                    </div>
                    {product.name && (
                        <div className="sm:w-1/2 w-full flex justify-center items-center">
                            <Carousel
                                responsive={responsive1}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                transitionDuration={700}
                                className="w-96"
                                showDots={false}
                                arrows={false}
                            >
                                {product.images.map((image) => (
                                    <img
                                        src={image}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-20 text-[26px]"
                    data-aos="zoom-in"
                >
                    Woodwork Products
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-20 text-[26px]"
                    data-aos="zoom-in"
                >
                    Incense Sticks
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <div className="flex flex-col w-full mt-24 min-h-[100vh]">
                <h1
                    className="font-bold text-white my-12 px-20 text-[26px]"
                    data-aos="zoom-in"
                >
                    Rose Pack
                </h1>
                <Slider data-aos="zoom-in" />
            </div>
            <Footer data-aos="zoom-in" />
        </div>
    );
};

export default Product;
