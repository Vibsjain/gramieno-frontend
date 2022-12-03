import Logo from "../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Our Story", path: "/our-story" },
        { title: "Contact", path: "/contact" },
    ];
    return (
        <div className="flex w-full">
            <div className="flex w-9/12 py-12 px-20 items-center">
                <img className="h-[80px]" src={Logo} alt="" />
                <ul className="flex gap-8 mx-20">
                    {navLinks.map((link) => {
                        return (
                            <li>
                                <button
                                    className="flex text-[26px] text-[#FFFFFF] hover:text-black hover:bg-white py-2 px-6 rounded-xl"
                                    onClick={() => navigate(`${link.path}`)}
                                >
                                    {link.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex w-3/12 py-12 px-20 gap-8 items-center justify-end">
                <i className="fa fa-shopping-cart text-[50px] text-white hover:text-black cursor-pointer"></i>
                <button className="flex py-2 px-4 border-2 border-white rounded-xl text-[20px] text-white hover:text-black hover:bg-white">
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;
