import React, { useState, useEffect, useContext } from "react";
import { adminShowBtn, tableHeadStyle } from "../../Assets/Constants";
// import OrderModal from "./OrderModal";
import ProductContext from "../../Context/ProductContext";
import { CloseOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import Modal from "react-awesome-modal";
import parse from "html-react-parser";

const Orders = () => {
    const { orders, getOrders, products, getProducts, updateDeliveryStatus } =
        useContext(ProductContext);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const headStyle = tableHeadStyle;
    const CustomerCard = ({ title, value }) => {
        return (
            <div className="flex w-full">
                <div className="flex w-1/4 justify-between">
                    <h1>{title}</h1>
                    <h1>:</h1>
                </div>
                <div className="flex w-3/4 px-12">
                    <h1>{value}</h1>
                </div>
            </div>
        );
    };

    const ItemCard = ({ item, index }) => {
        const product = products.find((product) => product._id === item.id);
        return (
            <div className="flex flex-col gap-4 w-full shadow-2xl rounded-xl border border-[#1E293B]">
                {/* Product Info Part */}
                {product && (
                    <div className="w-full flex-col sm:flex-row flex py-4">
                        <div className="flex sm:w-1/4 w-full justify-center items-center">
                            <img
                                src={product.images[0]}
                                className="w-11/12 h-11/12 rounded-xl shadow-2xl"
                                alt = "table"
                            />
                        </div>
                        <div className="w-full sm:w-3/4 flex flex-col p-4">
                            <h1>
                                <span className="font-bold text-lg">
                                    {product.name}{" "}
                                </span>
                                ({product.category})
                            </h1>
                            <h1 className="text-sm py-4 text-justify pr-0 sm:pr-24">
                                {product.description && parse(product.description)}
                            </h1>

                            <h1>
                                Dimensions : {product.length}cm x{" "}
                                {product.breadth}
                                cm x {product.height}cm
                            </h1>
                            <h1>Price : &#8377; {product.price}</h1>
                            <h1>Quantity Ordered : {item.quantity}</h1>
                            <h1>
                                Total Price : &#8377;{" "}
                                <span className="font-bold">
                                    {item.quantity *
                                        product.price *
                                        (1.18).toFixed(0)}
                                </span>
                            </h1>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const updateOrder = () => {
        swal({
            title: "Are you sure?",
            text: "Once changed, you will not be able to revert this!",
            icon: "warning",
        }).then((res) => {
            if (res) {
                const res1 = updateDeliveryStatus(data._id);
                swal({
                    title: "Success",
                    text: "Order Status Updated",
                    icon: "success",
                });
                setOpen(!open);
            } else {
                swal({
                    title: "Cancelled",
                    text: "Order Status Not Updated",
                    icon: "error",
                });
            }
        });
    };
    useEffect(() => {
        getOrders();
        getProducts();
    }, []);
    return (
        <div className="sm:px-24 px-4 mt-12 about-font">
            <Modal
                visible={open}
                width="90%"
                height="80%"
                effect="fadeInUp"
                onClickAway={() => {
                    setOpen(!open);
                }}
                // styles={bg}
            >
                <div className="h-[100%] overflow-auto modals  text-[#1E293B]">
                    <div className="flex w-full justify-end px-4 py-4">
                        <CloseOutlined
                            className="text-black hover:font-bold text-[20px]"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className="px-8 flex flex-col sm:flex-row gap-4 sm:items-center items-start w-full ">
                        <h1>
                            Delivery Status :{" "}
                            <span className="font-bold">
                                {data.isDelivered
                                    ? "Delivered"
                                    : "Not Delivered"}
                            </span>
                        </h1>
                        {!data.isDelivered && (
                            <button
                                className="w-full sm:w-auto border border-[#1E293B] bg-[#1E293B] text-white px-6 py-2 rounded-xl shadow-2xl hover:bg-white hover:text-[#1E293B]"
                                onClick={updateOrder}
                            >
                                Change
                            </button>
                        )}
                    </div>
                    {data.isDelivered && (
                        <h1 className="px-8">
                            Delivery Date :{" "}
                            <span className="font-bold">
                                {new Date(data.deliveredAt).toLocaleDateString(
                                    "en-IN",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                                ,
                                {new Date(data.deliveredAt).toLocaleTimeString(
                                    "en-IN",
                                    {
                                        hour: "numeric",
                                        minute: "numeric",
                                        second: "numeric",
                                    }
                                )}
                            </span>
                        </h1>
                    )}
                    <h1 className="py-4 font-extrabold text-[24px] underline text-center ">
                        Order Details
                    </h1>
                    {/* Customer Details */}
                    <div className="px-8 flex flex-col gap-2">
                        <h1 className="text-xl py-4 font-bold">
                            Customer's Details
                        </h1>
                        <CustomerCard
                            title="Name"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.fullName
                                    : ""
                            }
                        />
                        <CustomerCard
                            title="Email"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.email
                                    : ""
                            }
                        />
                        <CustomerCard
                            title="Phone"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.phone
                                    : ""
                            }
                        />
                        <CustomerCard
                            title="Address"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.address
                                    : ""
                            }
                        />
                        <CustomerCard
                            title="City"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.city
                                    : ""
                            }
                        />
                        <CustomerCard
                            title="Postal Code"
                            value={
                                data.shippingAddress
                                    ? data.shippingAddress.postalCode
                                    : ""
                            }
                        />
                    </div>
                    <div className="py-12 px-12">
                        <hr
                            className="py-4 px-12 text-[#1E293B]
                        "
                        />
                    </div>
                    {/* Order Details */}
                    <div className="px-2 sm:px-8 flex flex-col gap-2 pb-8">
                        <h1 className="py-4">
                            <span className="text-xl  font-bold">
                                Purchase Item's Details - Total Purchase Amount
                                : &#8377;{" "}
                                {data.totalPrice ? data.totalPrice : 0}
                            </span>
                            <br />
                            (Inclusive of all Taxes)
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            {data.orderItems &&
                                data.orderItems.map((item, index) => (
                                    <ItemCard
                                        item={item}
                                        index={index}
                                        key={index}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="overflow-x-auto relative rounded-2xl">
                <table className="w-full text-[16px] text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white  bg-[#937D64] py-2 px-2">
                        <tr>
                            <th scope="col" className={headStyle}>
                                Person
                            </th>
                            <th
                                scope="col"
                                className={`${headStyle} sm:flex hidden`}
                            >
                                Delivery Status
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
                        {orders[0] &&
                            orders.map((item, index) => (
                                <tr
                                    className={`text-white bg-[#B89C7D] border-b ${
                                        index % 2 === 0
                                            ? "bg-[#F9FAFB]"
                                            : "bg-white"
                                    }}`}
                                    key={index}
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-8 font-medium whitespace-nowrap about-font text-[14px]"
                                    >
                                        {item.shippingAddress.fullName}{" "}
                                    </th>
                                    <td className="py-4 px-8 about-font text-[14px] hidden sm:flex">
                                        {item.isDelivered ? (
                                            <span className="font-bold text-green-500">
                                                Delivered
                                            </span>
                                        ) : (
                                            <span className="font-bold text-red-500">
                                                Not Delivered
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-8 text-center">
                                        <button
                                            className={adminShowBtn}
                                            onClick={() => {
                                                setData(item);
                                                setOpen(true);
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

export default Orders;
