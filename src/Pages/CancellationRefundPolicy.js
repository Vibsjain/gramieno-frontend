import React, { useEffect } from "react";
import { Navbar, Footer, MobileTitle } from "../Components";

const CancellationRefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const divStyle = `flex flex-col text-justify text-md gap-8 my-12`;
    const boldFontStyle = `font-bold text-[22px] uppercase`;
    return (
        <div className="back">
            <Navbar />
            <div className="sm:px-12 px-4 ">
                <MobileTitle title="Cancellation and Refund Policy" />
                <div className={divStyle}>
                    <h1>
                        We have a 5-day return policy, which means you have 5
                        days after receiving your item to request a return. To
                        be eligible for a return, your item must be in the same
                        condition that you received it, unworn or unused, with
                        tags, and in its original packaging. You’ll also need
                        the receipt or proof of purchase. To start a return, you
                        can contact us at connect@gramieno.com. If your return
                        is accepted, we’ll send you a return shipping label, as
                        well as instructions on how and where to send your
                        package. Items sent back to us without first requesting
                        a return will not be accepted.
                    </h1>
                    <h1>
                        {" "}
                        We have a 48 hours cancellation policy, which means you
                        have 48 hours after placing an order to request the
                        cancellation of your order. To start a return, you can
                        contact us at connect@gramieno.com.{" "}
                    </h1>
                    <h1>
                        You can always contact us for any return/cancellation
                        question at connect@gramieno.com.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Damages and issues </h1>
                    <h1>
                        Please inspect your order upon reception and contact us
                        immediately if the item is defective, damaged or if you
                        receive the wrong item, so that we can evaluate the
                        issue and make it right.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>
                        Exceptions / non-returnable items{" "}
                    </h1>
                    <h1>
                        Certain types of items cannot be returned, like
                        perishable goods (such as food, flowers, or plants),
                        custom products (such as special orders or personalized
                        items), and personal care goods (such as beauty
                        products). We also do not accept returns for hazardous
                        materials, flammable liquids, or gases. Please get in
                        touch if you have questions or concerns about your
                        specific item.
                    </h1>
                    <h1>
                        Unfortunately, we cannot accept returns on sale items or
                        gift cards.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Exchanges </h1>
                    <h1>
                        The fastest way to ensure you get what you want is to
                        return the item you have, and once the return is
                        accepted, make a separate purchase for the new item.
                    </h1>
                </div>
                <hr />
                <div className={divStyle}>
                    <h1 className={boldFontStyle}>Refunds </h1>
                    <h1>
                        We will notify you once we’ve received and inspected
                        your return, and let you know if the refund was approved
                        or not. If approved, you’ll be automatically refunded on
                        your original payment method. Please remember it can
                        take some time for your bank or credit card company to
                        process and post the refund too.
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CancellationRefundPolicy;
