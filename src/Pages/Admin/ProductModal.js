import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import { CloseOutlined, EditFilled, CheckOutlined } from "@ant-design/icons";
import table from "../../Assets/Images/table.png";
import table1 from "../../Assets/Images/table1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductContext from "../../Context/ProductContext";
import FileBase64 from "react-file-base64";
import swal from "sweetalert";

const ProductModal = ({ open, setOpen, id }) => {
    const [dataOld, setDataOld] = useState({});
    const [edit, setEdit] = useState(false);
    const [image, setImage] = useState(table1);
    const { getProduct, product, editProduct } = useContext(ProductContext);

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
    const [data, setData] = useState({
        name: "",
        category: "",
        price: 0,
        description: "",
        countInStock: 0,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        length: 0,
        breadth: 0,
        height: 0,
    });
    useEffect(() => {
        getProduct(id);
        setDataOld(product);
        setData(product);
        console.log(data);
        // eslint-disable-next-line
    }, [id]);
    const handleUpload = () => {
        if (
            data.image1 === "" ||
            data.image2 === "" ||
            data.image3 === "" ||
            data.image4 === "" ||
            data.name === "" ||
            data.category === "" ||
            data.price === 0 ||
            data.description === "" ||
            data.length === 0 ||
            data.breadth === 0 ||
            data.height === 0
        ) {
            swal({
                title: "Error",
                text: "Please fill all the fields",
                icon: "error",
            });
            return;
        }
        console.log("upload");
        editProduct(id, data);
        swal({
            title: "Success",
            text: "Product Edited Successfully",
            icon: "success",
        });
        setOpen(!open);
        console.log(data);
    };
    const labelStyle = `block mb-2 text-[16px] font-medium text-black mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
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
                    <div className="flex w-full justify-end px-4 py-4 gap-4">
                        <CheckOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        />
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(false);
                                setOpen(!open);
                            }}
                        />
                    </div>
                    <div className="sm:px-24 px-4">
                        <label className={labelStyle}>Category</label>
                        <select
                            name="category"
                            id="category"
                            class={inputStyle}
                            placeholder="Category"
                            value={data.category}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    category: e.target.value,
                                });
                            }}
                        >
                            <option value="Wooden Works">Wooden Works</option>
                            <option value="Incense Sticks">
                                Incense Sticks
                            </option>
                            <option value="Rose">Rose</option>
                        </select>
                        <label class={labelStyle}>Product Name</label>
                        <input
                            type="text"
                            id="title"
                            class={inputStyle}
                            placeholder="Name of the Product"
                            value={data.name}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    name: e.target.value,
                                });
                            }}
                        />
                        <label class={labelStyle}>Dimensions of Product</label>
                        <div className="flex w-full gap-8">
                            <input
                                type="number"
                                id="length"
                                class={inputStyle}
                                placeholder="Length"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        length: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type="number"
                                id="bredth"
                                class={inputStyle}
                                placeholder="Breadth"
                                value={data.breadth}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        breadth: e.target.value,
                                    });
                                }}
                            />
                            <input
                                type="number"
                                id="height"
                                class={inputStyle}
                                placeholder="Height"
                                value={data.height}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        height: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <label class={labelStyle}>Description of Product</label>
                        <textarea
                            type="text"
                            id="desc"
                            class={inputStyle}
                            placeholder="Description"
                            value={data.description}
                            rows={5}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    description: e.target.value,
                                });
                            }}
                        />
                        <label class={labelStyle}>Price of Product</label>
                        <input
                            type="number"
                            id="price"
                            class={inputStyle}
                            placeholder="₹ Price"
                            value={data.price}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    price: e.target.value,
                                });
                            }}
                        />
                        <label class={labelStyle}>Count In Stock</label>
                        <input
                            type="number"
                            id="stock"
                            class={inputStyle}
                            placeholder="Number of Items in Stock"
                            value={data.countInStock}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    countInStock: e.target.value,
                                });
                            }}
                        />

                        <label class={labelStyle}>Add Images (Max. 4)</label>
                        <div className="input-file">
                            <FileBase64
                                type="file"
                                multiple={true}
                                className="w-full bg-black"
                                onDone={(files) => {
                                    setData({
                                        ...data,
                                        image1: files[0] ? files[0].base64 : "",
                                        image2: files[1] ? files[1].base64 : "",
                                        image3: files[2] ? files[2].base64 : "",
                                        image4: files[3] ? files[3].base64 : "",
                                    });
                                }}
                            />
                        </div>
                        {/* Show Images */}
                        <div>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="flex  gap-4 w-[150px] h-[150px] relative">
                                    {data.image1 !== "" && (
                                        <img
                                            src={data.image1}
                                            alt="image1"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}

                                    {data.image2 !== "" && (
                                        <img
                                            src={data.image2}
                                            alt="image2"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}

                                    {data.image3 !== "" && (
                                        <img
                                            src={data.image3}
                                            alt="image3"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                    {data.image4 !== "" && (
                                        <img
                                            src={data.image4}
                                            alt="image4"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            className="text-white bg-blue-700 w-full my-8 text-[16px] py-2 rounded-lg hover:bg-blue-800 about-font"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            ) : (
                <div className="h-[100%] overflow-auto modals">
                    <div className="flex w-full justify-end px-4 py-4 gap-4">
                        <EditFilled
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(!edit);
                                setData(product);
                            }}
                        />
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => {
                                setEdit(false);
                                setOpen(!open);
                            }}
                        />
                    </div>
                    <div className="w-full flex flex-col sm:px-12 px-2 my-8">
                        <div className="w-full flex sm:flex-row flex-col sm:gap-4 gap-8">
                            <div className="sm:w-1/2 w-full flex gap-16">
                                <div className="flex flex-col w-full gap-4 items-center">
                                    <div className="max-w-96 max-h-84">
                                        <img
                                            src={image}
                                            alt="table"
                                            className="w-96 h-80 rounded-2xl"
                                            data-aos="zoom-in"
                                        />
                                    </div>
                                    <div
                                        className="flex max-w-full gap-4 justify-center"
                                        data-aos="zoom-in"
                                    >
                                        <img
                                            src={
                                                product.image1
                                                    ? product.image1
                                                    : table
                                            }
                                            alt="table"
                                            className="w-16 h-16 rounded-lg cursor-pointer"
                                            data-aos="zoom-in"
                                            onClick={() =>
                                                setImage(product.image1)
                                            }
                                        />
                                        <img
                                            src={
                                                product.image1
                                                    ? product.image2
                                                    : table
                                            }
                                            alt="table"
                                            className="w-16 h-16 rounded-lg cursor-pointer"
                                            data-aos="zoom-in"
                                            onClick={() =>
                                                setImage(product.image2)
                                            }
                                        />
                                        <img
                                            src={
                                                product.image1
                                                    ? product.image3
                                                    : table
                                            }
                                            alt="table"
                                            className="w-16 h-16 rounded-lg cursor-pointer"
                                            data-aos="zoom-in"
                                            onClick={() =>
                                                setImage(product.image3)
                                            }
                                        />
                                        <img
                                            src={
                                                product.image1
                                                    ? product.image4
                                                    : table
                                            }
                                            alt="table"
                                            className="w-16 h-16 rounded-lg cursor-pointer"
                                            data-aos="zoom-in"
                                            onClick={() =>
                                                setImage(product.image4)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full flex flex-col text-black gap-6 ">
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
                                <h1
                                    className="pl-4  text-[20px]"
                                    data-aos="zoom-in"
                                >
                                    <span className="font-bold">
                                        Category :{" "}
                                    </span>{" "}
                                    {product.category}
                                </h1>
                                <h1
                                    className="pl-4 text-[20px]"
                                    data-aos="zoom-in"
                                >
                                    <span className="font-bold">
                                        Dimensions :{" "}
                                    </span>{" "}
                                    {product.length} x {product.breadth} x{" "}
                                    {product.height}
                                </h1>
                                <h1
                                    className="pl-4 font-bold text-[20px]"
                                    data-aos="zoom-in"
                                >
                                    ₹ {product.price}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex sm:flex-row flex-col-reverse mt-24 sm:gap-0 gap-8">
                            <div className="sm:w-1/2 w-full flex flex-col text-black sm:gap-12 gap:8">
                                <h1
                                    className="font-bold text-[20px]"
                                    data-aos="zoom-in"
                                >
                                    More Details About the Product
                                </h1>
                                <div className="px-4">
                                    <h1
                                        className="text-justify"
                                        data-aos="zoom-in"
                                    >
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
                                    <img
                                        src={product.image1}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                    <img
                                        src={product.image2}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                    <img
                                        src={product.image3}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                    <img
                                        src={product.image4}
                                        alt="table"
                                        className="w-96 h-72 rounded-lg"
                                        data-aos="zoom-in"
                                    />
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
