import React, { useState, useEffect, useContext } from "react";
import { adminShowBtn, tableHeadStyle } from "../../Assets/Constants";
// import ProductModal from "./ProductModal";
import ProductContext from "../../Context/ProductContext";
import Modal from "react-awesome-modal";
import { CheckOutlined, CloseOutlined, EditFilled } from "@ant-design/icons";
import FileBase64 from "react-file-base64";
import swal from "sweetalert";
import Carousel from "react-multi-carousel";
import table from "../../Assets/Images/table.png";

const Product = () => {
    const { products, getProducts, editProduct } = useContext(ProductContext);
    const [edit, setEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});
    const headStyle = tableHeadStyle;
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState({});
    const [image, setImage] = useState("");
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
    useEffect(() => {
        getProducts();
        setData(products);
        // eslint-disable-next-line
    }, []);
    const labelStyle = `block mb-2 text-[16px] font-medium text-black mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
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
        editProduct(editData._id, editData);
        swal({
            title: "Success",
            text: "Product Edited Successfully",
            icon: "success",
        });
        setOpen(!open);
        console.log(data);
    };
    return (
        <div className="sm:px-24 px-4 mt-12">
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
                                className={inputStyle}
                                placeholder="Category"
                                value={editData.category}
                                onChange={(e) => {
                                    setEditData({
                                        ...editData,
                                        category: e.target.value,
                                    });
                                }}
                            >
                                <option value="Wooden Works">
                                    Wooden Works
                                </option>
                                <option value="Incense Sticks">
                                    Incense Sticks
                                </option>
                                <option value="Rose">Rose</option>
                            </select>
                            <label className={labelStyle}>Product Name</label>
                            <input
                                type="text"
                                id="title"
                                className={inputStyle}
                                placeholder="Name of the Product"
                                value={editData.name}
                                onChange={(e) => {
                                    setEditData({
                                        ...editData,
                                        name: e.target.value,
                                    });
                                }}
                            />
                            <label className={labelStyle}>
                                Dimensions of Product
                            </label>
                            <div className="flex w-full gap-8">
                                <input
                                    type="number"
                                    id="length"
                                    className={inputStyle}
                                    placeholder="Length"
                                    value={editData.length}
                                    onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            length: e.target.value,
                                        });
                                    }}
                                />
                                <input
                                    type="number"
                                    id="bredth"
                                    className={inputStyle}
                                    placeholder="Breadth"
                                    value={editData.breadth}
                                    onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            breadth: e.target.value,
                                        });
                                    }}
                                />
                                <input
                                    type="number"
                                    id="height"
                                    className={inputStyle}
                                    placeholder="Height"
                                    value={editData.height}
                                    onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            height: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <label className={labelStyle}>
                                Description of Product
                            </label>
                            <textarea
                                type="text"
                                id="desc"
                                className={inputStyle}
                                placeholder="Description"
                                value={editData.description}
                                rows={5}
                                onChange={(e) => {
                                    setEditData({
                                        ...editData,
                                        description: e.target.value,
                                    });
                                }}
                            />
                            <label className={labelStyle}>
                                Price of Product
                            </label>
                            <input
                                type="number"
                                id="price"
                                className={inputStyle}
                                placeholder="₹ Price"
                                value={editData.price}
                                onChange={(e) => {
                                    setEditData({
                                        ...editData,
                                        price: e.target.value,
                                    });
                                }}
                            />
                            <label className={labelStyle}>Count In Stock</label>
                            <input
                                type="number"
                                id="stock"
                                className={inputStyle}
                                placeholder="Number of Items in Stock"
                                value={editData.countInStock}
                                onChange={(e) => {
                                    setEditData({
                                        ...editData,
                                        countInStock: e.target.value,
                                    });
                                }}
                            />

                            <label className={labelStyle}>
                                Add Images (Max. 4)
                            </label>
                            <div className="input-file">
                                <FileBase64
                                    type="file"
                                    multiple={true}
                                    onDone={({ base64 }) =>
                                        setEditData({
                                            ...editData,
                                            image1: base64,
                                        })
                                    }
                                />
                            </div>
                            {/* Show Images */}
                            <div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    {data.images &&
                                        data.images.map((image, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="relative"
                                                >
                                                    <img
                                                        src={image}
                                                        alt="Product"
                                                        className="w-[150px] h-[150px] object-cover"
                                                    />
                                                    <div
                                                        className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                                                        onClick={() => {
                                                            let images = [
                                                                ...data.images,
                                                            ];
                                                            images.splice(
                                                                index,
                                                                1
                                                            );
                                                            setData({
                                                                ...data,
                                                                images,
                                                            });
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4 text-white"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            );
                                        })}
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
                                    setEditData(product);
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
                        <div className="w-full flex flex-col sm:px-12 px-4 py-8">
                            {product.name && (
                                <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-8">
                                    <div className="sm:w-1/2 w-full flex gap-16 px-4">
                                        <div className="flex flex-col w-full gap-4 items-center">
                                            <div className="min-w-96 min-h-84">
                                                <img
                                                    src={
                                                        image
                                                            ? image
                                                            : product.images[0]
                                                    }
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
                                                        setImage(
                                                            product.images[0]
                                                        )
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
                                                        setImage(
                                                            product.images[1]
                                                        )
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
                                                        setImage(
                                                            product.images[2]
                                                        )
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
                                                        setImage(
                                                            product.images[3]
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 w-full flex flex-col gap-6 px-4">
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
                                            className="  text-[20px]"
                                            data-aos="zoom-in"
                                        >
                                            <span className="font-bold">
                                                Category :{" "}
                                            </span>{" "}
                                            {product.category}
                                        </h1>
                                        <h1
                                            className=" text-[20px]"
                                            data-aos="zoom-in"
                                        >
                                            <span className="font-bold">
                                                Dimensions :{" "}
                                            </span>{" "}
                                            {product.length} x {product.breadth}{" "}
                                            x {product.height}
                                        </h1>
                                        <h1
                                            className=" font-bold text-[20px]"
                                            data-aos="zoom-in"
                                        >
                                            ₹ {product.price}
                                        </h1>
                                    </div>
                                </div>
                            )}
                            <div className="w-full flex sm:flex-row flex-col-reverse mt-24 sm:gap-0 gap-8">
                                <div className="sm:w-1/2 w-full flex flex-col sm:gap-12 gap-8 px-4">
                                    <h1
                                        className="font-bold text-[20px]"
                                        data-aos="zoom-in"
                                    >
                                        More Details About the Product
                                    </h1>
                                    <div className="">
                                        <h1
                                            className="text-justify"
                                            data-aos="zoom-in"
                                        >
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
                    </div>
                )}
            </Modal>
            <div className="overflow-x-auto relative rounded-2xl">
                <table className="w-full text-[16px] text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white  bg-[rgb(20,28,47)] py-2 px-2">
                        <tr>
                            <th scope="col" className={headStyle}>
                                Product
                            </th>
                            <th
                                scope="col"
                                className={`${headStyle} sm:flex hidden`}
                            >
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
                                            setProduct(item);
                                            console.log(product);
                                            // setImage(product.images[0]);
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
