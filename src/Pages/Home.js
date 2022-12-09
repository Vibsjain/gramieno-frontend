import { ProductCard, Artisians, Navbar, Footer } from "../Components";
import One from "../Assets/Images/HeroImages/One.jpg";
import Two from "../Assets/Images/HeroImages/Two.jpg";
import Three from "../Assets/Images/HeroImages/Three.jpg";
import Four from "../Assets/Images/HeroImages/Four.jpg";
import Five from "../Assets/Images/HeroImages/Five.jpg";
import Main from "../Assets/Images/HeroImages/Main.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import table from "../Assets/Images/table.png";
import artisan1 from "../Assets/Images/artisan1.jpeg";
import artisan2 from "../Assets/Images/artisan2.jpeg";
import homeTestimonial from "../Assets/Images/homeTestimonial.jpeg";

function Home() {
    const navigate = useNavigate();
    const storyText = `text-[#836663]`;
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
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
    return (
        <div className="w-full back">
            <Navbar />
            {/* Hero Section */}
            <div className="w-full">
                <Carousel
                    responsive={responsive1}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    transitionDuration={700}
                    className="w-full pl-36"
                    showDots={false}
                    arrows={false}
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
                <Carousel
                    responsive={responsive}
                    className="px-12"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    transitionDuration={700}
                >
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                    <ProductCard
                        image={table}
                        item="Multipurpose Portable Table"
                        description="Yellow-Orange"
                        price={2499}
                    />
                </Carousel>
                {/* <div className="flex flex-wrap gap-8 w-full px-12 py-12">
                    
                </div> */}
            </div>
            {/* Artisians Section */}
            <div className="w-full min-h-[100vh] flex sm:flex-row flex-col sm:px-36 px-2 gap-16 mt-24">
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
            <div className="w-full flex flex-col max-h-[80vh] px-24 justify-between items-center mt-24 rounded-2xl ">
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
            {/* Testimonial Card */}
            <div className="flex w-full h-[70vh] mt-16">
                <div className="w-1/2 py-12 px-24 flex flex-col justify-between items-center">
                    <h1 className="text-white text-[26px] font-extrabold">
                        Testimonial
                    </h1>
                    <h1 className="text-white text-center text-[14px] px-16">
                        “Laptop Table from Gramien’O was godsend for WFH(Work
                        From Home). It helped me to do the work without risking
                        my posture. It also helped me manage my Chai while I
                        attended to my demanding work.Thoughtful design to
                        adjust the table made it easier for me to work on same
                        in bed or sofa and even in recliner. It has a place to
                        keep my phone accessible and space for notepad.”
                    </h1>
                    <button className="flex w-32 py-2 px-4 justify-center items-center border-2 border-white rounded-xl text-[16px] text-white font-bold hover:text-black text-center hover:bg-white">
                        View More
                    </button>
                </div>
                <div className="w-1/2 py-12 px-24 flex flex-col justify-between items-center">
                    <img
                        src={homeTestimonial}
                        alt="testimonial"
                        className=" w-3/4 h-[100%]"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
