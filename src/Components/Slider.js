import React, { useContext, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from "../Components";
import productContext from "../Context/ProductContext";
import "../Assets/CSS/index.css";
import Void from "../Assets/Images/Void.svg";

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
            breakpoint: { max: 3000, min: 1175 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1175, min: 775 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 775, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            {products.length !== 0 ? (
                <Carousel responsive={responsive} infinite={true} arrows={ar}>
                    {products &&
                        products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image1={product.images[0]}
                                item={product.name}
                                description={product.description}
                                price={product.price}
                                id={product._id}
                            />
                        ))}
                </Carousel>
            ) : (
                <div className="flex justify-center items-center w-full flex-col">
                    <h1 className="text-center text-white text-2xl font-bold">
                        No Products to Show
                    </h1>
                    <img src={Void} alt="Void" className="w-[15rem] mt-4" />
                </div>
            )}
        </div>
    );
};

export default Slider;
