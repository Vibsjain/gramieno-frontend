import React from "react";

const MobileTitle = ({ title }) => {
    return (
        <div className="sm:hidden flex py-2 mt-8">
            <h1 className="bg-white w-full text-center mx-4 rounded-lg font-bold text-[20px] py-4">
                {title}
            </h1>
        </div>
    );
};

export default MobileTitle;
