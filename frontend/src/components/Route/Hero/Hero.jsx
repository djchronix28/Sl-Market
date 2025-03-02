import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const banners = [
    // Full Watch
    "https://files.catbox.moe/mkojx7.jpg", // Full Watch

    // Full iPhone 16 (Front and Back)
    "https://files.catbox.moe/qzjbe3.jpg", // iPhone Front
    "https://files.catbox.moe/ucvgmb.jpg", // iPhone Back

    // Full Lenovo Legion Laptop
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2", // Lenovo Legion (High Resolution)
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`relative min-h-[50vh] 800px:min-h-[60vh] w-[95%] mx-auto bg-no-repeat bg-cover ${styles.normalFlex} rounded-lg overflow-hidden`}
            style={{ 
                backgroundImage: `url(${banners[current]})`, 
                backgroundSize: 'cover', 
                backgroundPosition: current === 1 ? 'center center' : 'center' // Centering image 2
            }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className={`${styles.section} w-[90%] 800px:w-[85%] relative z-10 flex flex-col justify-start items-center text-center pt-20`}>
                <h4
                    className={`text-[20px] leading-[1.2] 800px:text-[30px] text-white font-[600] capitalize`}
                >
                    Sl Market — Your One-Stop Multivendor Marketplace for Everything You Need!
                </h4>
                {/* Conditional rendering for the <p> text */}
                <div className="hidden 800px:block mt-8">
                    <p className="text-[14px] font-[Poppins] font-[400] text-white max-w-[800px]">
                        SL Market Multivendor is an innovative online marketplace that brings together a
                        diverse community of sellers and buyers. It offers a seamless, user-friendly platform where multiple
                        vendors can showcase and sell their products, providing customers with a wide variety of options in one
                        convenient place. From fashion and electronics to home essentials and unique handcrafted goods,
                        SL Market Multivendor ensures quality, affordability, and convenience. With secure payment options,
                        efficient delivery services, and a commitment to customer satisfaction, SL Market Multivendor is
                        the go-to destination for all your shopping needs.
                    </p>
                </div>
            </div>

            {/* Shop Now Button at Bottom Center */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5 bg-blue-600 hover:bg-blue-700 transition-colors duration-300`}>
                        <span className="text-[#fff] font-[Poppins] text-[18px]">
                            Shop Now
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
