import React, { useState, useContext } from "react";
import { PlusCircleOutlined, CloseOutlined } from "@ant-design/icons";
import "../../Assets/CSS/index.css";
import FileBase64 from "react-file-base64";
import ProductContext from "../../Context/ProductContext";
import swal from "sweetalert";

const Upload = () => {
    const { addProduct } = useContext(ProductContext);
    const [data, setData] = useState([
        {
            name: "",
            category: "",
            price: 0,
            description: "",
            countInStock: 0,
            images: [],
            len: 0,
            breadth: 0,
            height: 0,
        },
    ]);
    const handleUpload = () => {
        if (
            !data.name ||
            !data.category ||
            !data.price ||
            !data.description ||
            !data.countInStock ||
            !data.images ||
            !data.len ||
            !data.breadth ||
            !data.height
        ) {
            swal({
                title: "Error",
                text: "Please fill all the fields",
                icon: "error",
            });
            return;
        } else {
            data.length = parseInt(data.len);
            data.breadth = parseInt(data.breadth);
            data.height = parseInt(data.height);
            // console.log(data);
            addProduct(data);
            swal({
                title: "Success",
                text: "Product Added Successfully",
                icon: "success",
            });
            setData({
                name: "",
                category: "",
                price: 0,
                description: "",
                countInStock: 0,
                images: [],
                len: 0,
                breadth: 0,
                height: 0,
            });
        }
        console.log(data);
    };
    const labelStyle = `block mb-2 text-[16px] font-medium text-white mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    return (
        <div className="w-full sm:px-48 px-4 mt-24 about-font">
            <div className="bg-[#141C2F] rounded-2xl min-h-[70vh]">
                <h1 className="text-center text-[25px] font-bold text-white py-8 px-12 about-font">
                    Add a new Product
                </h1>
                <div className="sm:px-36 px-4">
                    <label className={labelStyle}>Category</label>
                    <select
                        name="category"
                        id="category"
                        className={inputStyle}
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
                        <option value="Incense Sticks">Incense Sticks</option>
                        <option value="Rose">Rose</option>
                    </select>
                    <label className={labelStyle}>Product Name</label>
                    <input
                        type="text"
                        id="title"
                        className={inputStyle}
                        placeholder="Name of the Product"
                        value={data.name}
                        onChange={(e) => {
                            setData({
                                ...data,
                                name: e.target.value,
                            });
                        }}
                    />
                    <label className={labelStyle}>Dimensions of Product</label>
                    <div className="flex w-full gap-8">
                        <input
                            type="number"
                            id="length"
                            className={inputStyle}
                            value={data.len}
                            placeholder="Length"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    len: e.target.value,
                                });
                            }}
                        />
                        <input
                            type="number"
                            id="bredth"
                            className={inputStyle}
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
                            className={inputStyle}
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
                    <label className={labelStyle}>Description of Product</label>
                    <textarea
                        type="text"
                        id="desc"
                        className={inputStyle}
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
                    <label className={labelStyle}>Price of Product</label>
                    <input
                        type="number"
                        id="price"
                        className={inputStyle}
                        placeholder="₹ Price"
                        value={data.price}
                        onChange={(e) => {
                            setData({
                                ...data,
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
                        value={data.countInStock}
                        onChange={(e) => {
                            setData({
                                ...data,
                                countInStock: e.target.value,
                            });
                        }}
                    />

                    <label className={labelStyle}>Add Images </label>
                    <div className="input-file">
                        <FileBase64
                            multiple={true}
                            onDone={(files) => {
                                let images = [];
                                files.map((file) => {
                                    images.push(file.base64);
                                });
                                for (let i = 0; i < data.images; i++) {
                                    images.push(data.images[i]);
                                }
                                setData({
                                    ...data,
                                    images: images,
                                });
                            }}
                        />
                    </div>
                    {/* Show Images */}
                    <div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            {data.images &&
                                data.images.map((image, index) => {
                                    return (
                                        <div key={index} className="relative">
                                            <img
                                                src={image}
                                                alt="Product"
                                                className="w-[150px] h-[150px] object-cover"
                                            />
                                            <div
                                                className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                                                onClick={() => {
                                                    let images = data.images;
                                                    images.splice(index, 1);
                                                    setData({
                                                        ...data,
                                                        images: images,
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
        </div>
    );
};

export default Upload;
