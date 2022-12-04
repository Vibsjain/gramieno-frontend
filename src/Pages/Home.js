import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import One from "../Assets/Images/HeroImages/One.jpg";
import Two from "../Assets/Images/HeroImages/Two.jpg";
import Three from "../Assets/Images/HeroImages/Three.jpg";
import Four from "../Assets/Images/HeroImages/Four.jpg";
import Five from "../Assets/Images/HeroImages/Five.jpg";
import Main from "../Assets/Images/HeroImages/Main.jpg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import table from "../Assets/Images/table.png";
import Artisians from "../Components/Artisians";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-full back">
            <Navbar />
            <div className="w-full flex justify-center">
                {/* <Carousel
                    autoPlay={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    interval={3000}
                    transitionTime={1000}
                    className="w-9/12 rounded-xl"
                >
                    <img className="w-full w-9/12 h-[80vh]" src={Main} alt="" />
                    <img className="w-full w-9/12 h-[80vh]" src={One} alt="" />
                    <img className="w-full w-9/12 h-[80vh]" src={Two} alt="" />
                    <img
                        className="w-full w-9/12 h-[80vh]"
                        src={Three}
                        alt=""
                    />
                    <img className="w-full w-9/12 h-[80vh]" src={Four} alt="" />
                    <img className="w-full w-9/12 h-[80vh]" src={Five} alt="" />
                </Carousel>
                 */}
                <img className="w-full w-10/12 h-[80vh]" src={Main} alt="" />
            </div>
            <div className="flex flex-col w-full mt-12 min-h-[100vh]">
                <div className="w-full flex py-4 px-12 h-36 items-center">
                    <div className="w-1/2 flex justify-start">
                        <h1 className="text-[30px] text-white font-bold">
                            Our Products
                        </h1>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <button
                            className="h-12 w-[8rem] bg-white rounded-xl"
                            onClick={() => navigate("/products")}
                        >
                            See All
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-8 w-full px-12 py-12">
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        details="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        details="Yellow-Orange"
                        price={2499}
                    />
                </div>
            </div>

            <div className="w-full min-h-[100vh]"></div>
            <Footer />
        </div>
    );
}

export default Home;
