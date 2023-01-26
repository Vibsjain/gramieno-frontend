import React, { useEffect } from "react";
import Logo from "../Assets/Images/logo.png";
import { Navbar, Footer } from "../Components";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
    AOS.init();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const aboutText = `We bring products from the heartland which can have global appeal and acceptance.
    Diya is indicative of spreading the light and prosperity for all stakeholders associated with the brand.
    Tree represents growth. Seed planted becomes a tree and spreads all across.
    Origin
    The idea took shape during lockdown. We wanted to contribute in whatever little way we could, by serving people in distress. We worked for destitute mothers of Vrindavan, migrant labours going back home, families going thru economic hardships and raised funds for parents wanting to marry their daughters.
    During this period we came across many Self help groups (especially formed by women) . We got the opportunity of working with the SHG's ( Distributed 11000 cloth masks made by the SHG's). That's when we realized that these rural SHG's are very keen to contribute to their household income and can make many things.But the real issue is to reach out to people who can buy.
    Thru Gramien'O we want to reach out to sensitive, well travelled and Quality conscious people, who are genuinely interested in the wellbeing of others beyond Caste, Creed and Religion
    History behind the brand
    It all started with a walk (Walk of Hope- for peace and interfaith harmony). A walk which started from Kanyakumari and culminated in Srinagar (J&K), covering 7500kms across 11 States. Led by Sri M ( Spiritual guide, social reformer and an educationist).
    Gramien'O (ग्रामीण'O) is a step towards nurturing the seeds sown during the Walk.
    `;
    return (
        <div className="back">
            <Navbar />
            <div className="flex flex-col sm:flex-row py-12 sm:px-8 px-4 sm:gap-0 gap-12 sm:mt-0 mt-12">
                <div
                    className="flex sm:w-4/12 w-full justify-center items-center" 
                    data-aos="zoom-in"
                >
                    <img src={Logo} alt="" />
                </div>
                <div className="sm:w-8/12 w-full sm:pr-48" data-aos="zoom-in">
                    <h1 className="sm:text-[18px] text-[16px] italic about-font text-justify text-white">
                        {aboutText}
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurStory;
