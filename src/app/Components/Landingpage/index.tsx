"use client";  // Marking the component as a client-side component to allow hooks

import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '../NavBar';

export default function Landingpage() {
    // Create the animation for the card fade-in from the left
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Trigger the animation after the component is mounted
    }, []);

    const fadeInLeft = useSpring({
        opacity: show ? 1 : 0,  // Fade in (opacity change)
        transform: show ? 'translateX(0px)' : 'translateX(-100px)',  // Move from left to original position
        config: { duration: 1000 },  // Duration of the animation
    });

    return (
        <div
            className="bg-no-repeat bg-center h-screen bg-cover relative md:px-8 px-1"
            style={{ backgroundImage: "url('/landingpage.png')" }}
            id='home'
        >
            <Navbar/>
            {/* Card Section with animation applied */}
            <animated.div
                className="md:w-[650px] w-[350px] absolute top-[25%] bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-3xl leading-tight"
                style={fadeInLeft}  // Apply spring animation to the style
            >
                <section className="mb-4">
                    <Image
                        src={"/colorblocks.png"}
                        height={100}
                        width={50}
                        alt="colorblock"
                    />
                </section>
                <h1 className="font-mako text-white md:text-[40px] text-[25px] mb-4">
                    AcademiX Revolutionizing School Management for Educators Everywhere.
                </h1>
                <h2 className="font-jua text-white md:text-[20px] text-[15px] mb-6 mt-10 ">
                    Effortlessly organize, track, and optimize your school&apos;s operations with a single platform.
                </h2>
                <button
                    type="button"
                    className="bg-buttonbg hover:bg-blue-700 text-white text-[20px] font-jua py-4 px-8 rounded-lg shadow-2xl"
                >
                    Get Started Today
                </button>
            </animated.div>
        </div>
    );
}
