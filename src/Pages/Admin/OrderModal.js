import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import { CloseOutlined } from "@ant-design/icons";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../../Assets/Constants";
import ProductContext from "../../Context/ProductContext";
import table from "../../Assets/Images/table.png";

const OrderModal = ({ open, setOpen, id }) => {
    const { order, getOrder, products, getProducts } =
        useContext(ProductContext);
    const [data, setData] = useState({});
    useEffect(() => {
        getOrder(id);
        setData(order);
        console.log(order);
        getProducts();
        console.log(products);
        // eslint-disable-next-line
    }, [open]);

    const infoDiv = `flex justify-center px-36`;
    const infoHead1 = `w-1/3 text-left text-white`;
    const infoHead2 = `w-1/3 text-right text-white`;
    const infoHead = `w-1/3 text-center text-white`;
    const Card = ({ __id, quantity }) => {
        const product = products.find((item) => item._id === __id);
        return (
            <div className="w-full border h-[12rem] flex flex-col sm:flex-row sm:gap-0 gap-8 bg-white rounded-lg ">
                <div className="sm:w-4/12 w-full flex gap-16">
                    {product && (
                        <img
                            src={product.image1 ? product.image1 : table}
                            alt="table"
                            className="w-96 rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-br-none"
                        />
                    )}
                </div>
                <div className="flex flex-col sm:w-6/12 w-full pl-4 py-2 justify-between">
                    <h1 className="font-bold ">{product && product.name}</h1>
                    <div className="flex flex-col gap-2 mt-2 text-[14px]">
                        {product && (
                            <h1>
                                {product.description.length > 100
                                    ? product.description.slice(0, 100) + "..."
                                    : product.description}
                            </h1>
                        )}
                        <h1>
                            Price : ₹{" "}
                            <span className="font-bold">
                                {product && product.price}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col sm:w-2/12 w-full pl-4 py-2 px-6 sm:items-end items-start justify-between ">
                    <div className="flex flex-row sm:flex-col justify-between w-full ">
                        <h1 className="font-bold sm:text-right text-left">
                            Total
                        </h1>
                        <div className="flex flex-col items-end">
                            <h1>{product && product.price}</h1>
                            <h1>x {quantity}</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end ">
                        <h1 className="font-bold">
                            ₹ {product && product.price * quantity}
                        </h1>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <Modal
            visible={open}
            width="90%"
            height="80%"
            effect="fadeInUp"
            onClickAway={() => {
                setOpen(!open);
            }}
        >
            <div className="h-[100%] overflow-auto modals">
                <div className="flex w-full justify-end px-4 py-4">
                    <CloseOutlined
                        className="text-black hover:font-bold text-[20px]"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <h1 className="py-4 font-bold text-[24px] underline text-center ">
                    Order Details
                </h1>
                {data.shippingAddress && (
                    <div className="flex flex-col gap-2 px-36">
                        <h1 className="font-bold py-8 text-center ">
                            Customer's Details
                        </h1>
                        <div className="flex flex-col gap-2 bg-[#1E293B] py-16 rounded-xl">
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>Name</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.fullName}
                                </h1>
                            </div>
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>Email</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.email}
                                </h1>
                            </div>
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>Phone</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.phone}
                                </h1>
                            </div>
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>Address</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.address}
                                </h1>
                            </div>
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>City</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.city}
                                </h1>
                            </div>
                            <div className={infoDiv}>
                                <h1 className={infoHead1}>Postal Code</h1>
                                <h1 className={infoHead}>:</h1>
                                <h1 className={infoHead2}>
                                    {data.shippingAddress.postalCode}
                                </h1>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-2 py-8">
                    <h1 className="font-bold py-12 text-center ">
                        Purchase Details
                    </h1>
                    <div className="flex flex-col gap-8 w-full px-36">
                        {data.orderItems &&
                            data.orderItems.map((item) => (
                                <Card __id={item.id} quantity={item.quantity} />
                            ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrderModal;
