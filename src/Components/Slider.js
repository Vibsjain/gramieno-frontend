import React, { useContext, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "../Components";
import table from "../Assets/Images/table.png";
import productContext from "../Context/ProductContext";

const Slider = ({ data }) => {
    const { products, getProducts } = useContext(productContext);
    const [ar, setAr] = React.useState(true);
    useEffect(() => {
        getProducts();
        const width = window.innerWidth;
        if (width <= 680) {
            setAr(false);
        } else {
            setAr(true);
        }
    }, []);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 680 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 680, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <Carousel responsive={responsive} infinite={true} arrows={ar}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image1={product.image1}
                        item={product.name}
                        description={product.description}
                        price={product.price}
                        id={product._id}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
