import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/CSS/index.css";
import { Home, OurStory, Products, Product, Admin } from "./Pages";
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
            </Routes>
        </BrowserRouter>
    </ProductState>,
    rootElement
);
