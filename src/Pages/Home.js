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
import artisan1 from "../Assets/Images/artisan1.jpeg";
import artisan2 from "../Assets/Images/artisan2.jpeg";
import homeStory from "../Assets/Images/homeStory.jpeg";

function Home() {
    const navigate = useNavigate();
    const storyText = `text-[#836663]`;
    return (
        <div className="w-full back">
            <Navbar />
            {/* Hero Section */}
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
            {/* Products Section */}
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
            {/* Artisians Section */}
            <div className="w-full min-h-[100vh] flex px-36 gap-16 mt-24">
                <Artisians
                    title="The Woodwork Artisans"
                    image={artisan1}
                    details="Chhotu, Rakesh & Buddhu are excellent craftsmen and their Ability to convert an idea into finished products is unmatched. But what is most admiring, is their enthusiasm and ever-smiling faces even under adverse times like the pandemic. Gramien’O brings to you their creation"
                />
                <Artisians
                    title="Brajgandha - An Initiative empowering the Matas of Vrindavan"
                    image={artisan2}
                    details="A unique initiative by Destitute Matas of Vrindavan, creating floral products  (Incense sticks, Rose Pack, Gulal) from the flowers offered to the deity 
                    in temples of Vrindavan-Mathura"
                />
            </div>
            {/* Story Card */}
            <div className="w-full flex flex-col h-[80vh] px-24 justify-between items-center mt-24 rounded-2xl ">
                <div className="flex flex-col justify-between home-story rounded-xl">
                    <h1 className="text-white text-[26px] font-extrabold px-12 mt-8">
                        Our Story
                    </h1>
                    <div className="w-full flex flex-col px-72 gap-4">
                        <h1 className={storyText}>
                            Gramien (Village) 'O (Global) : We bring products
                            from the heartland which can have global appeal and
                            acceptance.
                        </h1>
                        <h1 className={storyText}>
                            Diya is indicative of spreading the light and
                            prosperity for all stakeholders associated with the
                            brand.
                        </h1>
                        <h1 className={storyText}>
                            Tree represents growth. Seed planted becomes a tree
                            and spreads all across.
                        </h1>
                    </div>
                    <div className="w-full flex justify-end py-8 px-6">
                        <button
                            className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[16px] text-white font-bold hover:text-black text-center hover:border-black"
                            onClick={() => navigate("/our-story")}
                        >
                            View More
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
