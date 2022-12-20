import { useEffect, useContext } from "react";
import {
    Slider,
    Artisians,
    Navbar,
    Footer,
    TestimonialCard,
    HeroAnimate,
} from "../Components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import artisan1 from "../Assets/Images/artisan1.jpeg";
import artisan2 from "../Assets/Images/artisan2.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductContext from "../Context/ProductContext";

function Home() {
    const { products, getProducts } = useContext(ProductContext);
    AOS.init();
    const navigate = useNavigate();
    // const storyText = `text-[#836663]`;
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
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
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    useEffect(() => {
        getProducts();
        console.log(products);
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="w-full back">
            <Navbar />
            {/* Hero Section */}
            <div
                className="flex w-full sm:flex hidden justify-center"
                data-aos="fade-up"
            >
                <HeroAnimate />
            </div>
            <div className="sm:hidden flex py-2 ">
                <h1 className="bg-white w-full text-center mx-4 rounded-lg font-bold text-[20px] py-4">
                    Hey, Gramien'O
                </h1>
            </div>
            {/* Products Section */}
            <div
                className="flex flex-col w-full sm:mt-[100vh] mt-12 min-h-[100vh]"
                data-aos="fade-up"
            >
                <div className="w-full flex py-4 sm:px-12 px-8 h-36 items-center">
                    <div className="w-1/2 flex justify-start">
                        <h1 className="sm:text-[30px] text-[18px] text-white font-bold">
                            Our Products
                        </h1>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <button
                            className="sm:h-12 h-8 sm:w-[8rem] w-[6rem] bg-white rounded-xl"
                            onClick={() => navigate("/products")}
                        >
                            See All
                        </button>
                    </div>
                </div>
                <Slider />
            </div>
            {/* Artisians Section */}
            <div
                className="w-full min-h-[100vh] flex sm:flex-row flex-col sm:px-36 px-8 gap-16 mt-24"
                data-aos="fade-up"
            >
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
            {/* <div
                data-aos="fade-up"
                className="w-full flex flex-col max-h-[80vh] px-24 justify-between items-center mt-24 rounded-2xl "
            >
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
            </div> */}
            {/* Testimonial Card */}
            <div className="w-full mt-24" data-aos="fade-up">
                <h1 className="text-center my-12 font-bold text-[30px] text-white">
                    Testimonials
                </h1>
                <Carousel responsive={responsive} infinite={true}>
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                    <TestimonialCard text={text} />
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
