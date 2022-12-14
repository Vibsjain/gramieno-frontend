import React, { useState } from "react";
import { PlusCircleOutlined, CloseOutlined } from "@ant-design/icons";
import "../../Assets/CSS/index.css";
import FileBase64 from "react-file-base64";

const Upload = () => {
    const [imageData, setImageData] = useState([]);
    const [data, setData] = useState([
        {
            name: "",
            category: "",
            price: 0,
            description: "",
            countInStock: 0,
            images: [],
            dimensions: [
                {
                    length: 0,
                    bredth: 0,
                    height: 0,
                },
            ],
        },
    ]);
    const handleUpload = () => {
        setData([
            {
                ...data,
                images: imageData,
            },
        ]);
        console.log(imageData);
        console.log(data);
    };
    const labelStyle = `block mb-2 text-[16px] font-medium text-white mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    return (
        <div className="w-full px-48 mt-24 about-font">
            <div className="bg-[#141C2F] rounded-2xl min-h-[70vh]">
                <h1 className="text-center text-[25px] font-bold text-white py-8 px-12 about-font">
                    Add a new Product
                </h1>
                <div className="px-36">
                    <label className={labelStyle}>Category</label>
                    <select
                        name="category"
                        id="category"
                        class={inputStyle}
                        placeholder="Category"
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
                    <label class={labelStyle}>Product Name</label>
                    <input
                        type="text"
                        id="title"
                        class={inputStyle}
                        placeholder="Name of the Product"
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
                                    dimensions: {
                                        ...data.dimensions,
                                        length: e.target.value,
                                    },
                                });
                            }}
                        />
                        <input
                            type="number"
                            id="bredth"
                            class={inputStyle}
                            placeholder="Breadth"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    dimensions: {
                                        ...data.dimensions,
                                        breadth: e.target.value,
                                    },
                                });
                            }}
                        />
                        <input
                            type="number"
                            id="height"
                            class={inputStyle}
                            placeholder="Height"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    dimensions: {
                                        ...data.dimensions,
                                        height: e.target.value,
                                    },
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
                        onChange={(e) => {
                            setData({
                                ...data,
                                price: e.target.value,
                            });
                        }}
                    />

                    <label class={labelStyle}>Add Images</label>
                    <div>
                        <div className="flex gap-4 justify-center items-center bg-white w-36 h-12 rounded-xl">
                            <h1 className="text-[#141C2F] uppercase font-extrabold">
                                Add{" "}
                            </h1>
                            <PlusCircleOutlined
                                className="text-[30px] text-[#141C2F] cursor pointer"
                                onClick={() => {
                                    document.getElementById("images").click();
                                }}
                            />
                        </div>
                        <input
                            type="file"
                            id="images"
                            class={inputStyle}
                            placeholder="Images"
                            multiple
                            className="hidden absolute"
                            onChange={(e) => {
                                const files = e.target.files;
                                const fileArray = Array.from(files);
                                fileArray.forEach((file) => {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setImageData((prev) => [
                                            ...prev,
                                            reader.result,
                                        ]);
                                    };
                                    reader.readAsDataURL(file);
                                });
                            }}
                        />
                    </div>
                    <div className="flex gap-2 my-2">
                        {imageData[0] &&
                            imageData.map((image) => {
                                return (
                                    <div>
                                        <CloseOutlined
                                            className="mb-[-1rem] absolute bg-white rounded-full p-1 text-[10px] font-extrabold cursor-pointer"
                                            onClick={() => {
                                                setImageData(
                                                    imageData.filter(
                                                        (img) => img !== image
                                                    )
                                                );
                                            }}
                                        />
                                        <img
                                            src={image}
                                            alt="image"
                                            className="w-20 h-20 rounded-xl"
                                        />
                                    </div>
                                );
                            })}
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
