import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import { CloseOutlined } from "@ant-design/icons";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../../Assets/Constants";
import ProductContext from "../../Context/ProductContext";

const OrderModal = ({ open, setOpen, id }) => {
    const { order, getOrder, products, getProducts } =
        useContext(ProductContext);

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
        getOrder(id);
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
                            <h1>Name : {"Vaibhav"}</h1>
                            <h1>Address : {"Vaibhav"}</h1>
                            <h1>City : {"Vaibhav"}</h1>
                            <h1>Postal Code : {"Vaibhav"}</h1>
                            <h1>Email : {"Vaibhav"}</h1>
                            <h1>Phone : {"Vaibhav"}</h1>
                        </div>
                    </div>

                    <div className="my-2">
                        <h1 className="italic font-bold">Item's Details</h1>
                        <div className="my-2">
                            <h1>Item Name : {"Vaibhav"}</h1>
                            <h1>Item Price : {"Vaibhav"}</h1>
                            <h1>Item Quantity : {"Vaibhav"}</h1>    
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrderModal;
