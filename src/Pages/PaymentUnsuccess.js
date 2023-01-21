import React from "react";
import logo from "../Assets/Images/logo.png";

const PaymentUnsuccess = () => {
    return (
        <div className="w-full back h-[100vh] flex justify-center items-center">
            <div className="flex flex-col items-center justify-center w-[75vh] h-[75vh] bg-[#583400] rounded-xl  shadow-2xl">
                <div className="w-[10rem] h-[10rem] bg-white rounded-lg">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[50%] mx-auto mt-8"
                    />
                </div>
                <h1 className="text-center text-white my-2">
                    Sorry!! 🙁🙁 <br />
                    Order Unsuccessful
                </h1>
            </div>
        </div>
    );
};

export default PaymentUnsuccess;
