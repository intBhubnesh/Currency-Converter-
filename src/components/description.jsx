import React, { useState, useEffect } from "react";
import Currency from "./currencyIcon";
import coinsImage from "./../assets/Coins.jpeg";
import illustration from "./../assets/illustration.png";

function Description() {
    const features = [
        {
            time: '30 min ago',
            title: 'Effortless Conversion',
            desc: 'Instant currency conversions with pinpoint accuracy. Designed for smooth transactions and quick results.'
        },
        {
            time: '25 min ago',
            title: 'Friendly Interface',
            desc: 'A simple and intuitive layout tailored for anyone to navigate with ease—no complex steps or clutter.'
        },
        {
            time: '18 min ago',
            title: 'Stunning UI',
            desc: 'Crafted for clarity and elegance, the interface balances beauty and function for a seamless experience.'
        },
        {
            time: '1 day ago',
            title: 'Real-Time Updates',
            desc: 'Get the latest rates at your fingertips with live data feeds that keep you updated in real time.'
        }
    ];

    // State to manage the active feature index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [features.length]);

    return (
        <div className="hidden md:block relative bg-white text-zinc-900 rounded-[40px] w-[60%] max-w-full h-[98vh] shadow-md ">
            {/* Upper Section */}
            <div className="flex flex-col justify-center gap-5 p-10">
                <h1 className="text-3xl font-semibold lg:text-4xl">Currency Converter</h1>
                <p className="lg:text-[16px] leading-6 text-zinc-700 text-[14px]">
                    Effortlessly convert currencies with real-time rates and accurate conversions. Perfect for travelers, businesses, and anyone who needs quick currency calculations.
                </p>
                <Currency />
            </div>

            {/* Lower Section */}
            <div className="absolute bottom-0 flex w-full bg-red-500 rounded-[40px] p-5 justify-between">
                {/* Carousel Card */}
                <div className=" inline-flex flex-col items-center justify-between gap-2 p-4 bg-red-300/50 rounded-[32px] w-[90%] ">
                    {/* Feature Card */}
                    <div className="p-6 bg-white rounded-[24px] flex flex-col gap-4 items-start   max-w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            <div>
                                <p className="text-[12px] text-zinc-600">{features[currentIndex].time}</p>
                                <h3 className="text-xl font-semibold text-zinc-900">{features[currentIndex].title}</h3>
                            </div>

                            {/* Indicator Dots */}
                            <div className="flex items-center gap-2">
                                {features.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-full transition-all ${index === currentIndex ? 'bg-red-500 w-4 h-4' : 'bg-zinc-400 w-2 h-2'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-[12px] font-medium text-zinc-500">{features[currentIndex].desc}</p>
                    </div>

                    {/* Image Below the Card */}
                    <div className="rounded-[24px] h-[200px] overflow-hidden w-full">
                        <img src={coinsImage} alt="Coin Illustration" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Right-Side Illustration */}
                <div className="items-center justify-center hidden lg:flex">
                    <img src={illustration} alt="Illustration" className="size-50 shrink-0" />
                </div>
            </div>
        </div>
    );
}

export default Description;
