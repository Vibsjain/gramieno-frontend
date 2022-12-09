import React from "react";

const Upload = () => {
    const labelStyle = `block mb-2 text-[16px] font-medium text-white mt-8`;
    const inputStyle = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
    return (
        <div className="w-full px-48 mt-24">
            <div className="bg-[#141C2F] rounded-2xl min-h-[70vh]">
                <h1 className="text-center text-[25px] font-bold text-white py-8 px-12">
                    Add a new Product
                </h1>
                <div className="px-36">
                    <label class={labelStyle}>Product Name</label>
                    <input
                        type="text"
                        id="title"
                        class={inputStyle}
                        placeholder="Name of the Product"
                    />
                    <label class={labelStyle}>Dimensions of Product</label>
                    <div className="flex w-full gap-8">
                        <input
                            type="number"
                            id="length"
                            class={inputStyle}
                            placeholder="Length"
                        />
                        <input
                            type="number"
                            id="bredth"
                            class={inputStyle}
                            placeholder="Breadth"
                        />
                        <input
                            type="number"
                            id="height"
                            class={inputStyle}
                            placeholder="Height"
                        />
                    </div>
                    <label class={labelStyle}>Description of Product</label>
                    <textarea
                        type="text"
                        id="desc"
                        class={inputStyle}
                        placeholder="Description"
                        rows={5}
                    />
                    <label class={labelStyle}>Price of Product</label>
                    <input
                        type="number"
                        id="price"
                        class={inputStyle}
                        placeholder="₹ Price"
                    />
                    <button className="text-white bg-blue-700 w-full my-8 text-[16px] py-2 rounded-lg hover:bg-blue-800 ">Upload</button>
                </div>
            </div>
        </div>
    );
};

export default Upload;
