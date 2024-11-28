"use client";
import Image from "next/image";
import React, { useState } from "react";

const CustomSlider: React.FC = () => {
    const slides = [
        { id: 1, src: "/carousel1.png", alt: "Wild Landscape" },
        { id: 2, src: "/carousel2.png", alt: "Camera" },
        { id: 3, src: "/carousel3.png", alt: "Exotic Fruits" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-[600px] overflow-hidden">
            {/* Slider container */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="w-[600px] flex-shrink-0">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={500}
                            height={500}
                            className="block w-full rounded-lg h-[300px]"
                        />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl bg-gray-800 text-white p-2 md:p-5 rounded-full hover:bg-gray-600"
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl bg-gray-800 text-white p-2 md:p-5  rounded-full hover:bg-gray-600"
            >
                &#8594;
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-gray-800"
                                : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;
