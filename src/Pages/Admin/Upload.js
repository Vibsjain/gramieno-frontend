import React, { useState, useContext } from "react";
import "../../Assets/CSS/index.css";
import ProductContext from "../../Context/ProductContext";
import swal from "sweetalert";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Assets/CSS/index.css";
import FileBase64 from "react-file-base64";
import loader from "../../Assets/Images/loader.gif";

const Upload = () => {
    const { addProduct, addUploadImage } = useContext(ProductContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        {
            name: "",
            category: "",
            price: 0,
            description: "",
            countInStock: 0,
            images: [],
            discount: 0,
            len: 0,
            breadth: 0,
            height: 0,
        },
    ]);
    const handleUpload = async () => {
        if (
            !data.name ||
            !data.category ||
            !data.price ||
            !data.description ||
            !data.countInStock ||
            !data.images
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
            let imageArray = [];
            setLoading(true);
            for (let i = 0; i < data.images.length; i++) {
                const cloudImage = await addUploadImage(data.images[i]);
                console.log(i);
                console.log(cloudImage.data.url);
                imageArray.push(cloudImage.data.url);
            }
            data.images = imageArray;
            console.log(data);
            await addProduct(data);
            await setData({
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
            setLoading(false);
            swal({
                title: "Success",
                text: "Product Added Successfully",
                icon: "success",
            });
        }
    };
    const labelStyle = `block mb-2 text-[16px] font-medium text-white mt-8 about-font`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 about-font`;
    return (
        <div className="w-full sm:px-48 px-4 mt-24 about-font">
            <div className="bg-[#0E1E2F] rounded-2xl min-h-[70vh]">
                <h1 className="text-center text-[25px] font-bold text-white py-8 px-12 about-font">
                    {loading ? "Adding" : "Add"} a new Product{" "}
                    {loading && ". . . . ."}
                </h1>

                {!loading ? (
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
                            value={data.name}
                            onChange={(e) => {
                                setData({
                                    ...data,
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
                                value={data.len}
                                placeholder="Length (inches)"
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
                                placeholder="Breadth (inches)"
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
                                placeholder="Height (inches)"
                                value={data.height}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        height: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <label className={labelStyle}>
                            Description of Product
                        </label>
                        <div className="bg-white rounded-lg">
                            <ReactQuill
                                theme="snow"
                                className="rounded-xl"
                                value={data.description}
                                placeholder="Product Description"
                                onChange={(e) => {
                                    console.log(e);
                                    setData({
                                        ...data,
                                        description: e,
                                    });
                                }}
                            />
                        </div>
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
                        <label className={labelStyle}>Discount</label>
                        <input
                            type="number"
                            id="discount"
                            className={inputStyle}
                            placeholder="Discount % (if any)"
                            value={data.discount}
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    discount: e.target.value,
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
                        {/* Add multiple images in data.images array */}
                        <div className="input-file">
                            <FileBase64
                                multiple={true}
                                onDone={(files) => {
                                    setData({
                                        ...data,
                                        images: files.map(
                                            (file) => file.base64
                                        ),
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
                                                        let images =
                                                            data.images;
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
                ) : (
                    <div className="flex justify-center items-center h-[500px]">
                        <img src={loader} alt="loader" className="w-[50%]" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
