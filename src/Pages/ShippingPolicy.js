import React from "react";
import { Navbar, Footer, MobileTitle } from "../Components";

const ShippingPolicy = () => {
    const divStyle = `flex flex-col text-justify text-white text-[18px] gap-8 my-12`;
    const boldFontStyle = `font-bold text-[22px] uppercase`;
    return (
        <div className="back">
            <Navbar />
            <div className="sm:px-12 px-4 ">
                <MobileTitle title="Shipping Policy" />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        What locations do you ship to?{" "}
                    </h1>
                    <h1>
                        We package & ship orders to everywhere across India but
                        transit time will vary from location to location.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        How long does an order take to arrive once shipped?
                    </h1>
                    <h1>
                        All orders are processed & shipped as soon as possible,
                        depending on the fastest shipping method available to
                        your location. We typically take 24-48 hours for
                        handling & processing your order. The typical delivery
                        time frame is anywhere from 2-7 business days. Depending
                        on your location, you might receive items much earlier.
                        Please allow extra time during our busy season as postal
                        delays are out of our control. Additional factors such
                        as distance, customs, natural disasters may cause
                        further postal delays. Tracking information, including
                        the carriers, are provided with every order. Every order
                        is ensured, if your package does not arrive you are
                        eligible for a refund or replacement. Please reach out
                        to connect@gramieno.com for additional assistance in
                        this matter.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Will I receive a tracking number for my package?
                    </h1>
                    <h1>
                        Tracking numbers will be sent as soon as we are able to
                        ship your order. Sometimes additional delays may arise
                        that are beyond our control such as postal delays or
                        customs inspections. Thank you for your patience and
                        understanding.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        What do I do if my order is lost in the mail?
                    </h1>
                    <h1>
                        Each order will be sent with insured shipping & handling
                        to prevent lost packages. If your order happens to get
                        lost in transit, or returned to us for any reason, we
                        have your back! The postal service is out of our control
                        once your package leaves our warehouse. However, in
                        cases like this, because the packages are insured, we
                        will send you a new package with priority shipping and
                        full tracking, if possible.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Are there any hidden fees or taxes?
                    </h1>
                    <h1>
                        All prices on our webpage are displayed in INR with all
                        taxes completely covered on our end.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Extended Delays</h1>
                    <h1>
                        In some instances, the delivery time may take longer
                        than our policy states. If this is the case, please
                        contact us as soon as possible and we will do everything
                        we can to help you resolve any situation that we have
                        control over.
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShippingPolicy;
