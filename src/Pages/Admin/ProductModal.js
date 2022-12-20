import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import {
    CloseOutlined,
    EditFilled,
    PlusCircleOutlined,
} from "@ant-design/icons";
import table from "../../Assets/Images/table.png";
import table1 from "../../Assets/Images/table1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductContext from "../../Context/ProductContext";

const ProductModal = ({ open, setOpen, id }) => {
    const [dataOld, setDataOld] = useState({});
    const [edit, setEdit] = useState(false);
    const { getProduct, product } = useContext(ProductContext);
    useEffect(() => {
        getProduct(id);
        setDataOld(product);
        // eslint-disable-next-line
    }, [product]);
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
    const NonEdit = () => {};
    const Edit = () => {
        return <div></div>;
    };
    return (
        <Modal
            visible={open}
            width="90%"
            height="80%"
            effect="fadeInUp"
            onClickAway={() => setOpen(!open)}
        >
            {edit ? (
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(false);
                                setOpen(!open);
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4 gap-4">
                        <EditFilled
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => setEdit(!edit)}
                        />
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(false);
                                setOpen(!open);
                            }}
                        />
                    </div>
                    <div className="sm:px-12 sm:py-12 px-2 py-8">
                        <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-8">
                            <div className="sm:w-1/2 w-full flex gap-16">
                                <div className="flex flex-col w-full gap-4 items-center">
                                    <img
                                        src={
                                            dataOld.images
                                                ? dataOld.images[0]
                                                : table
                                        }
                                        alt="table"
                                        className="w-96 rounded-2xl"
                                    />
                                    <div className="flex w-full gap-4 justify-center">
                                        {dataOld.images
                                            ? dataOld.images.map(
                                                  (image, index) => (
                                                      <img
                                                          src={image}
                                                          alt="table"
                                                          className="w-20 h-20 rounded-2xl"
                                                      />
                                                  )
                                              )
                                            : null}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full flex flex-col text-white gap-4 justify-between text-black">
                                <h1 className="font-bold text-[20px]">
                                    {product.name
                                        ? product.name
                                        : "Multipurpose Portable Table (Yellow-Orange)"}
                                </h1>
                                <h1 className="pl-4 text-[20px]">
                                    <span className="font-bold">
                                        Category :{" "}
                                    </span>
                                    {product.category}
                                </h1>
                                {/* <h1 className="pl-4 text-[20px]">
                                    <span className="font-bold">
                                        Dimensions :{" "}
                                    </span>
                                    {product.dimensions[0]} x{" "}
                                    {product.dimensions[1]} x{" "}
                                    {product.dimensions[2]}
                                </h1> */}
                                <div className="sm:pl-4 px-2">
                                    <h1 className="text-justify">
                                        {product.description}
                                    </h1>
                                </div>
                                <h1 className="pl-4 text-[20px]">
                                    <span className="font-bold">
                                        Count In Stock :{" "}
                                    </span>
                                    {product.countInStock}
                                </h1>
                                <h1 className="pl-4 font-bold text-[20px]">
                                    ₹ {product.price}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex sm:flex-row flex-col-reverse mt-24 sm:gap-0 gap-8">
                            <div className="sm:w-1/2 w-full flex flex-col text-white sm:gap-12 gap-8 text-black">
                                <h1 className="font-bold text-[20px]">
                                    More Details About the Product
                                </h1>
                                <div className="px-4">
                                    <h1 className="text-justify">
                                        {product.description}
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
                                    className="w-full "
                                    showDots={false}
                                    arrows={false}
                                >
                                    {product.images ? (
                                        product.images.map((image, index) => (
                                            <img
                                                src={image}
                                                alt="table"
                                                className="w-96 h-72 rounded-lg"
                                            />
                                        ))
                                    ) : (
                                        <img
                                            src={table1}
                                            alt="table"
                                            className="w-96 h-72 rounded-2lg"
                                        />
                                    )}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default ProductModal;
