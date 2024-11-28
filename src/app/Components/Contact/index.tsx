"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        setIsSubmitted(true); // Set the submission state
        setTimeout(() => {
            // Optional: You can trigger additional actions here if needed
        }, 2000); // Delay the feedback message for 2 seconds
    };

    return (
        <div className="py-10" id="contact">
            <h1 className="font-mako md:text-[40px] text-3xl text-center">Get in Touch with Us!</h1>
            <p className="font-jua md:text-[20px] text-sm text-center pt-4">support@academix.com</p>
            <div className="md:grid grid-cols-2 mx-10 pt-8">
                <div>
                    <Image
                        src={"/contact.png"}
                        alt="Contact Us"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="md:w-full w-full mx-auto mt-14">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <label htmlFor="name" className="font-jua">Name</label>
                                <input type="text" id="name" className="bg-black bg-opacity-50 rounded-lg p-4 text-white" required />
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <label htmlFor="email" className="font-jua">Email</label>
                                <input type="email" id="email" className="bg-black bg-opacity-50 rounded-lg p-4 text-white" required />
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <label htmlFor="message" className="font-jua">Message</label>
                                <textarea id="message" className="bg-black bg-opacity-50 rounded-lg p-4 text-white" required></textarea>
                            </div>
                            <button type="submit" className="bg-buttonbg hover:bg-blue-700 text-white font-jua py-3 items-center px-[45%] md:px-[47%] rounded-lg shadow-2xl mt-4">
                                Send
                            </button>
                        </form>
                    ) : (
                        <div className="text-center mt-10">
                            <h2 className="text-3xl font-mako text-green-500 border-2 items-center inline-block p-10 rounded-lg md:mt-24">Thank you for your feedback!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
