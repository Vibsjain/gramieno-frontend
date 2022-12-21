import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import { CloseOutlined } from "@ant-design/icons";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../../Assets/Constants";
import ProductContext from "../../Context/ProductContext";

const OrderModal = ({ open, setOpen, id }) => {
    const { order, getOrder, products, getProducts } =
        useContext(ProductContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        getOrder(id);
        setData(order);
        console.log(order);
        getProducts();
        // eslint-disable-next-line
    }, []);

    const btnClass = buyBtn;
    return (
        <Modal
            visible={open}
            width="90%"
            height="80%"
            effect="fadeInUp"
            onClickAway={() => setOpen(!open)}
        >
            <div className="h-[100%] overflow-auto modals">
                <div className="flex w-full justify-end px-4 py-4">
                    <CloseOutlined
                        className="text-black hover:font-bold text-[20px]"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="sm:px-12 sm:py-12 px-2 py-8">
                    <h1 className="text-center font-bold text-xl">
                        Order Details
                    </h1>
                    <div className="my-2">
                        <h1 className="italic font-bold">Customer's Details</h1>
                        <div className="my-2">
                            <h1>
                                Name :{" "}
                                {data.shippingAddress
                                    ? data.shippingAddress.fullName
                                    : "Vaibhav"}
                            </h1>
                            <h1>
                                Address :{" "}
                                {data.shippingAddress
                                    ? data.shippingAddress.address
                                    : "Vaibhav"}
                            </h1>
                            <h1>
                                City :
                                {data.shippingAddress
                                    ? data.shippingAddress.city
                                    : "NEW YORK"}
                            </h1>
                            <h1>
                                Postal Code :
                                {data.shippingAddress
                                    ? data.shippingAddress.postalCode
                                    : "Vaibhav"}
                            </h1>
                            <h1>
                                Email :
                                {data.shippingAddress
                                    ? data.shippingAddress.email
                                    : "Vaibhav"}
                            </h1>
                            <h1>
                                Phone :
                                {data.shippingAddress
                                    ? data.shippingAddress.phone
                                    : "Vaibhav"}
                            </h1>
                        </div>
                    </div>

                    <div className="my-2">
                        <h1 className="italic font-bold">Item's Details</h1>

                        {data.orderItems &&
                            data.orderItems.map((item) => (
                                <div className="my-2">
                                    <h1>
                                        Item Name :{" "}
                                        {
                                            products.find(
                                                (product) =>
                                                    product._id === item.id
                                            ).name
                                        }
                                    </h1>
                                    <h1>
                                        Item Price :{" "}
                                        {
                                            products.find(
                                                (product) =>
                                                    product._id === item.id
                                            ).price
                                        }
                                    </h1>
                                    <h1>Item Quantity : {item.quantity}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrderModal;
