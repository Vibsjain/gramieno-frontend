import React, { useState, useEffect, useContext } from "react";
import { Navbar, Footer, DiscountAvail } from "../Components";
import ProductContext from "../Context/ProductContext";
import swal from "sweetalert";

const Checkout = () => {
    const {
        added,
        setAdded,
        products,
        getProducts,
        // addOrder,
        checkoutHandle,
        discounts,
        getDiscounts,
    } = useContext(ProductContext);
    const [getDiscount, setGetDiscount] = useState(false);
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({
        orderItems: [],
        shippingAddress: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            postalCode: "",
        },
        orderDate: "",
        totalPrice: 0,
        isDelivered: false,
        deliveredAt: "",
        discount: 0,
    });
    useEffect(() => {
        getProducts();
        getDiscounts();
        const orders = JSON.parse(localStorage.getItem("orders"));
        if (orders) {
            setOrders(orders);
            setOrder({
                ...order,
                orderItems: orders,
                totalPrice: orders.reduce(
                    (acc, item) => acc + item.price * item.quantity * 1.18,
                    0
                ),
            });
        }
        if (discounts[0].minPurchase <= order.totalPrice && getDiscount) {
            setOrder({
                ...order,
                discount: discounts[0].discountPercent, 
                totalPrice:
                    (1 - discounts[0].discountPercent / 100) *
                    order.totalPrice.toFixed(0),
            });
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [added, getDiscount]);
    const handlePayment = () => {
        if (
            order.shippingAddress.fullName === "" ||
            order.shippingAddress.email === "" ||
            order.shippingAddress.phone === "" ||
            order.shippingAddress.address === "" ||
            order.shippingAddress.city === "" ||
            order.shippingAddress.postalCode === ""
        ) {
            swal({
                title: "Please fill all the details",
                icon: "warning",
                button: "OK",
            });
            return;
        }

        swal({
            title: "Are you sure?",
            text: "Once you pay, you will not be able to cancel the order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willPay) => {
            if (willPay) {
                checkoutHandle(order);
                localStorage.removeItem("orders");
                localStorage.removeItem("cart");
                setAdded(true);
                setOrders({
                    orderItems: [],
                    shippingAddress: {
                        fullName: "",
                        email: "",
                        phone: "",
                        address: "",
                        city: "",
                        postalCode: "",
                    },
                    orderDate: "",
                    totalPrice: 0,
                    isDelivered: false,
                    deliveredAt: "",
                });
            } else {
                swal("Payment Cancelled!");
            }
        });
    };
    return (
        <div className="back">
            <Navbar />
            <DiscountAvail setGetDiscount={setGetDiscount} />
            <div className="mt-8">
                <div className="flex flex-col md:flex-row w-full min-h-[100vh] sm:gap-0 gap-12">
                    <div className="sm:hidden flex py-2">
                        <h1 className="bg-white w-full text-center mx-4 rounded-lg font-bold text-[20px] py-4">
                            Your Checkout
                        </h1>
                    </div>
                    <div className="flex flex-col gap-12 sm:w-2/3 w-full sm:px-8 px-4">
                        <div className="flex flex-col justify-between w-full bg-white flex rounded-lg px-4">
                            <div className="flex flex-col w-full py-4">
                                <h1 className="text-center font-bold text-[18px]">
                                    Fill Your Details
                                </h1>
                            </div>
                            <hr />
                            <div className="flex flex-col w-full py-4 px-2">
                                <div className="my-4">
                                    <label className="text-[15px] pl-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                        value={order.shippingAddress.fullName}
                                        placeholder="Enter Your Name"
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                shippingAddress: {
                                                    ...order.shippingAddress,
                                                    fullName: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>

                                <div className="my-4">
                                    <label className="text-[15px] pl-2">
                                        E-Mail
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                        value={order.shippingAddress.email}
                                        placeholder="Enter Your Email"
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                shippingAddress: {
                                                    ...order.shippingAddress,
                                                    email: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>

                                <div className="my-4">
                                    <label className="text-[15px] pl-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="phone"
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                        value={order.shippingAddress.phone}
                                        placeholder="Enter Your Phone No."
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                shippingAddress: {
                                                    ...order.shippingAddress,
                                                    phone: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>

                                <div className="my-4">
                                    <label className="text-[15px] pl-2">
                                        Address
                                    </label>
                                    <textarea
                                        type="text"
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                        value={order.shippingAddress.address}
                                        placeholder="Enter Your Address"
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                shippingAddress: {
                                                    ...order.shippingAddress,
                                                    address: e.target.value,
                                                },
                                            })
                                        }
                                        rows={5}
                                    />
                                </div>
                                <div className="flex gap-4 sm:flex-row flex-col w-full justify-between">
                                    <div className="my-4">
                                        <label className="text-[15px] pl-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                            value={order.shippingAddress.city}
                                            placeholder="Enter Your City"
                                            onChange={(e) =>
                                                setOrder({
                                                    ...order,
                                                    shippingAddress: {
                                                        ...order.shippingAddress,
                                                        city: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="my-4">
                                        <label className="text-[15px] pl-2">
                                            Pincode
                                        </label>
                                        <input
                                            type="postalCode"
                                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                            value={
                                                order.shippingAddress.postalCode
                                            }
                                            placeholder="Enter Your Pincode"
                                            onChange={(e) =>
                                                setOrder({
                                                    ...order,
                                                    shippingAddress: {
                                                        ...order.shippingAddress,
                                                        postalCode:
                                                            e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center sm:w-1/3 w-full sm:px-8 px-4">
                        <div className="flex flex-col w-full justify-between min-h-[300px]  bg-white px-4 rounded-lg py-4 ">
                            <div className="flex flex-col w-full ">
                                <h1 className="text-center font-bold text-[18px]">
                                    Subtotal
                                </h1>
                            </div>
                            <hr />
                            <div>
                                {orders.map((item, index) => (
                                    <div
                                        className="flex justify-between px-4"
                                        key={index}
                                    >
                                        <h1 className="font-bold">
                                            {
                                                products.find(
                                                    (product) =>
                                                        product._id === item.id
                                                ).name
                                            }
                                        </h1>
                                        <h1>
                                            ₹{" "}
                                            {products.find(
                                                (product) =>
                                                    product._id === item.id
                                            ).price * item.quantity}
                                        </h1>
                                    </div>
                                ))}
                                <div className="flex px-4 justify-between mt-4">
                                    <h1 className="font-bold">Tax</h1>
                                    <h1>
                                        ₹{" "}
                                        {orders
                                            .reduce(
                                                (acc, item) =>
                                                    acc +
                                                    products.find(
                                                        (product) =>
                                                            product._id ===
                                                            item.id
                                                    ).price *
                                                        item.quantity *
                                                        0.18,
                                                0
                                            )
                                            .toFixed(0)}
                                    </h1>
                                </div>
                                <div className="flex px-4 justify-between mt-4">
                                    <h1 className="font-bold">Discount</h1>
                                    <h1>
                                        - ₹{" "}
                                        {order.totalPrice *
                                            order.discount *
                                            0.01}
                                    </h1>
                                </div>
                            </div>
                            <hr />
                            <div className="flex px-4 justify-between ">
                                <h1 className="font-bold">Total</h1>
                                <h1>
                                    ₹{" "}
                                    {orders
                                        .reduce(
                                            (acc, item) =>
                                                acc +
                                                products.find(
                                                    (product) =>
                                                        product._id === item.id
                                                ).price *
                                                    item.quantity *
                                                    (1 -
                                                        order.discount * 0.01) *
                                                    1.18,
                                            0
                                        )
                                        .toFixed(0)}
                                </h1>
                            </div>
                        </div>
                        <div className="my-4">
                            <button
                                className="w-[100%] px-4 h-16 justify-center items-center border-2 border-white rounded-[6px] text-[20px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold"
                                onClick={() => {
                                    handlePayment();
                                    setAdded(true);
                                    setAdded(false);
                                }}
                                disabled={orders.length === 0}
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
