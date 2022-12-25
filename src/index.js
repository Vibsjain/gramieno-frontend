import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/CSS/index.css";
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
} from "./Pages";
import ProductState from "./Context/ProductState";

const rootElement = document.getElementById("root");
render(
    <ProductState>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route
                    path="/cancellation-refund-policy"
                    element={<CancellationRefundPolicy />}
                />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    </ProductState>,
    rootElement
);
