import React from "react";
import table from "../Assets/Images/table.png";
import table1 from "../Assets/Images/table1.jpeg";
import Logo from "../Assets/Images/logo.png";
import { buyBtn } from "../Assets/Constants";

import "../Assets/CSS/index.css";
const btnClass = buyBtn;
const ProductAnimate = () => {
    const Card = ({ image }) => {
        return (
            <li className="hero sm:px-24 px-4 sm:h-[70vh] h-[50vh]">
                <div className="w-full flex sm:flex-row flex-col rounded-2xl">
                    <div className="sm:w-7/12 sm:h-[70vh] h-[50vh] w-full rounded-2xl">
                        <img
                            src={image}
                            alt="product"
                            className="w-full sm:h-[70vh] h-[50vh] sm:rounded-t-[0px] sm:rounded-b-[0px] sm:rounded-tl-2xl sm:rounded-bl-2xl rounded-t-2xl"
                        />
                    </div>
                    <div className="sm:w-5/12 w-full sm:py-0 py-8 flex flex-col justify-center items-center gap-4 bg-white sm:rounded-t-[0px] sm:rounded-tr-2xl rounded-br-2xl sm:rounded-bl-[0px] rounded-bl-2xl ">
                        <img src={Logo} />
                        <h1 className="sm:px-12 px-8 font-bold text-[18px]">
                            Village Mart for the Urban Heart
                        </h1>
                        <h1 className="sm:px-16 px-12">
                            Chhotu, Rakesh & Buddhu are excellent craftsmen and
                            their Ability to convert an idea into finished
                            products is unmatched.
                        </h1>
                        <button className={btnClass}>Shop Now</button>
                    </div>
                </div>
            </li>
        );
    };
    return (
        <div className="flex w-full justify-center">
            <ul className="hero flex w-full justify-center">
                <Card image={table} />
                <Card image={table1} />
                <Card image="https://upload.wikimedia.org/wikipedia/commons/7/7f/4Coffee_Table.jpg" />
                <Card image="https://www.ulcdn.net/images/products/579153/original/Adele_Compact_coffee_table_Classic_WalnutLP_1.jpg?1655454844" />
            </ul>
        </div>
    );
};

export default ProductAnimate;
