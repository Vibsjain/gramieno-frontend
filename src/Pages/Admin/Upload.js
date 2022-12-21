import React, { useState, useContext } from "react";
import { PlusCircleOutlined, CloseOutlined } from "@ant-design/icons";
import "../../Assets/CSS/index.css";
import FileBase64 from "react-file-base64";
import ProductContext from "../../Context/ProductContext";

const Upload = () => {
    const { addProduct } = useContext(ProductContext);
    // const [imageData, setImageData] = useState([]);
    const [data, setData] = useState([
        {
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
        },
    ]);
    const handleUpload = () => {
        addProduct(data);
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
                        <option value="Incense Sticks">Incense Sticks</option>
                        <option value="Rose">Rose</option>
                    </select>
                    <label class={labelStyle}>Product Name</label>
                    <input
                        type="text"
                        id="title"
                        class={inputStyle}
                        placeholder="Name of the Product"
                        value = {data.name}
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
                            value={data.length}
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
        </div>
    );
};

export default Upload;
