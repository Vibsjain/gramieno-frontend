import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/CSS/index.css";
import { Home, OurStory, Products, Product } from "./Pages";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
