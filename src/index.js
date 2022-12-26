import { render } from "react-dom";
import App from "./App";
import "./Assets/CSS/index.css";
import ProductState from "./Context/ProductState";

const rootElement = document.getElementById("root");
render(
    <ProductState>
        <App />
    </ProductState>,
    rootElement
);
