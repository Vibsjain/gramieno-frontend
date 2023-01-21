import React, { useEffect } from "react";
import {
    Home,
    OurStory,
    Products,
    Product,
    Admin,
    Cart,
    Checkout,
    CancellationRefundPolicy,
    ShippingPolicy,
    TermsConditions,
    PrivacyPolicy,
    PaymentSuccess,
    PaymentUnsuccess,
} from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductContext from "./Context/ProductContext";

const App = () => {
    const { isLogged, setIsLogged } = React.useContext(ProductContext);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || token === "false") {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }
    });
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route
                        path="/terms-conditions"
                        element={<TermsConditions />}
                    />
                    <Route
                        path="/cancellation-refund-policy"
                        element={<CancellationRefundPolicy />}
                    />
                    <Route
                        path="/shipping-policy"
                        element={<ShippingPolicy />}
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route
                        path="/payment-success"
                        element={<PaymentSuccess />}
                    />
                    <Route
                        path="/payment-unsuccess"
                        element={<PaymentUnsuccess />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
