import React, { useState, useEffect, useContext } from "react";
import Modal from "react-awesome-modal";
import { CloseOutlined } from "@ant-design/icons";
import "react-multi-carousel/lib/styles.css";
import { buyBtn } from "../../Assets/Constants";
import ProductContext from "../../Context/ProductContext";

const OrderModal = ({ open, setOpen, id }) => {
    const { products, getProducts } = useContext(ProductContext);
    // const [data, setData] = useState([]);
    const data = [
        {
            shippingAddress: {
                fullName: "Optio quibusdam aut",
                address: "Ut quis at eum velit",
                city: "Dolores quia in et o",
                postalCode: "Sit error sit eveni",
                email: "gawari@mailinator.com",
                phone: "Consequatur porro pa",
            },
            _id: "63a6cae1cc995bd67511d692",
            orderItems: [
                {
                    id: "63a2861052d77d94fda50618",
                    quantity: 1,
                    price: 1500,
                    _id: "63a6cae1cc995bd67511d693",
                },
                {
                    id: "63a2861152d77d94fda5061a",
                    quantity: 1,
                    price: 1500,
                    _id: "63a6cae1cc995bd67511d694",
                },
            ],
            orderDate: null,
            totalPrice: 3540,
            isDelivered: false,
            deliveredAt: null,
            __v: 0,
        },
        {
            shippingAddress: {
                fullName: "Et sit aperiam aliqu",
                address: "Eum nihil accusantiu",
                city: "Eos veniam qui sun",
                postalCode: "In soluta corrupti ",
                email: "kyzoraxa@mailinator.com",
                phone: "Est fugiat velit qui",
            },
            _id: "63a6cb35cc995bd67511d6ba",
            orderItems: [
                {
                    id: "63a59cfad5970232acc4ccc8",
                    quantity: 1,
                    price: 338,
                    _id: "63a6cb35cc995bd67511d6bb",
                },
                {
                    id: "63a59f03c6b914bc07aa001d",
                    quantity: 2,
                    price: 689,
                    _id: "63a6cb35cc995bd67511d6bc",
                },
            ],
            orderDate: null,
            totalPrice: 2024.8799999999999,
            isDelivered: false,
            deliveredAt: null,
            __v: 0,
        },
    ];
    useEffect(() => {
        console.log(
            // data.filter((item) => item._id === id)[0].shippingAddress.fullName,
            id
        );
        getProducts();
        // eslint-disable-next-line
    }, [open]);

    const infoDiv = `flex justify-center px-36`;
    const infoHead = `w-1/3 text-center `;
    const Card = ({ id, quantity }) => {
        const product = products.find((item) => item._id === id);
        return (
            <div className="w-full min-h-[12rem] flex flex-col sm:flex-row sm:gap-0 gap-8 bg-white rounded-lg ">
                <div className="sm:w-4/12 w-full flex gap-16">
                    <img
                        src={product.image1}
                        alt="table"
                        className="w-96 rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-br-none"
                    />
                </div>
                <div className="flex flex-col sm:w-6/12 w-full pl-4 py-2 justify-between">
                    <h1 className="font-bold ">{product.name}</h1>
                    <div className="flex flex-col gap-2 mt-2 text-[14px]">
                        <h1>
                            {product.description.length > 100
                                ? product.description.slice(0, 100) + "..."
                                : product.description}
                        </h1>
                        <h1>
                            Price : ₹{" "}
                            <span className="font-bold">{product.price}</span>
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col sm:w-2/12 w-full pl-4 py-2 px-6 sm:items-end items-start justify-between ">
                    <div className="flex flex-row sm:flex-col justify-between w-full ">
                        <h1 className="font-bold sm:text-right text-left">
                            Total
                        </h1>
                        <div className="flex flex-col items-end">
                            <h1>{product.price}</h1>
                            <h1>x {quantity}</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end ">
                        <h1 className="font-bold">
                            ₹ {product.price * quantity}
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
                {/* <div className="flex flex-col gap-2">
                    <h1 className="font-bold py-12 text-center ">
                        Customer's Details
                    </h1>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>Name</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.fullName
                            }
                        </h1>
                    </div>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>Email</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.email
                            }
                        </h1>
                    </div>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>Phone</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.phone
                            }
                        </h1>
                    </div>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>Address</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.address
                            }
                        </h1>
                    </div>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>City</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.city
                            }
                        </h1>
                    </div>
                    <div className={infoDiv}>
                        <h1 className={infoHead}>Postal Code</h1>
                        <h1 className={infoHead}>:</h1>
                        <h1 className={infoHead}>
                            {
                                data.filter((item) => item._id === id)[0]
                                    .shippingAddress.postalCode
                            }
                        </h1>
                    </div>
                </div> */}

                <div className="flex flex-col gap-2">
                    <h1 className="font-bold py-12 text-center ">
                        Purchase Details
                    </h1>
                    {/* <div className="flex flex-col gap-8 w-full px-4">
                        {data
                            .filter((item) => item._id === id)[0]
                            .orderItems.map((item) => (
                                <Card id={item.id} quantity={item.quantity} />
                            ))}
                    </div> */}
                </div>
            </div>
        </Modal>
    );
};

export default OrderModal;
