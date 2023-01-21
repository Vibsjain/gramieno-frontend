import React from "react";
import logo from "../Assets/Images/logo.png";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const searchQuery = useSearchParams()[0];
    const orderId = searchQuery.get("reference");
    console.log(orderId);
    return (
        <div className="w-full back h-[100vh] flex justify-center items-center">
            <div className="px-4 flex flex-col items-center justify-center w-[75%] h-[75%] bg-[#583400] rounded-xl  shadow-2xl">
                <div className="w-[10rem] h-[10rem] bg-white rounded-lg">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[50%] mx-auto mt-8"
                    />
                </div>
                <h1 className="text-center text-white my-2">
                    Congratulations!! 🎉🎉 <br />
                    Order Successful
                </h1>
                <h1 className="text-white text-center">
                    Your order id is{" "}
                    <span className="text-yellow-400">{orderId}</span>
                </h1>
                {/*click to go to home page */}
                <button
                    className="w-[10rem] h-[3rem] bg-[#F2C94C] rounded-lg text-center text-[#583400] font-bold text-lg flex items-center justify-center mt-4"
                    onClick={() => navigate("/")}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
