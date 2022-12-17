import React, { useState, useEffect, useContext } from "react";
import { Navbar, Footer } from "../Components";
// import { useNavigate } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

const Checkout = () => {
    const { added, setAdded, products, getProducts } =
        useContext(ProductContext);
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        pincode: "",
    });
    useEffect(() => {
        getProducts();
        const orders = JSON.parse(localStorage.getItem("orders"));
        if (orders) {
            setOrders(orders);
        }
        // eslint-disable-next-line
    }, [added]);
    return (
        <div className="back">
            <Navbar />
            <div>
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
                                        value={user.name}
                                        placeholder="Enter Your Name"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                name: e.target.value,
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
                                        value={user.email}
                                        placeholder="Enter Your Email"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                email: e.target.value,
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
                                        value={user.phone}
                                        placeholder="Enter Your Phone No."
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                phone: e.target.value,
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
                                        value={user.address}
                                        placeholder="Enter Your Address"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                address: e.target.value,
                                            })
                                        }
                                        rows={5}
                                    />
                                </div>
                                <div className="flex gap-4 sm:flex-row flex-col w-full justify-between">
                                    <div className="my-4">
                                        <label className="text-[15px] pl-2">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                            value={user.state}
                                            placeholder="Enter Your State"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    state: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="my-4">
                                        <label className="text-[15px] pl-2">
                                            Pincode
                                        </label>
                                        <input
                                            type="pincode"
                                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FFC107]"
                                            value={user.pincode}
                                            placeholder="Enter Your Pincode"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    pincode: e.target.value,
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
                                {orders.map((item) => (
                                    <div className="flex justify-between px-4">
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
                                        {orders.reduce(
                                            (acc, item) =>
                                                acc +
                                                products.find(
                                                    (product) =>
                                                        product._id === item.id
                                                ).price *
                                                    item.quantity *
                                                    0.18,
                                            0
                                        )}
                                    </h1>
                                </div>
                            </div>
                            <hr />
                            <div className="flex px-4 justify-between ">
                                <h1 className="font-bold">Total</h1>
                                <h1>
                                    ₹{" "}
                                    {orders.reduce(
                                        (acc, item) =>
                                            acc +
                                            products.find(
                                                (product) =>
                                                    product._id === item.id
                                            ).price *
                                                item.quantity *
                                                1.18,
                                        0
                                    )}
                                </h1>
                            </div>
                        </div>
                        <div className="my-4">
                            <button
                                className="w-[100%] px-4 h-16 justify-center items-center border-2 border-white rounded-[6px] text-[20px] text-white bg-[#E08849] hover:text-black text-center drop-shadow about-font hover:border-gray-800 hover:font-bold"
                                onClick={() => {
                                    console.log(user);
                                    setAdded(true);
                                    localStorage.removeItem("orders");
                                    localStorage.removeItem("cart");
                                    setOrders([]);
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
