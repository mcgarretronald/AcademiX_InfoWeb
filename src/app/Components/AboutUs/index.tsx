"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Aboutus() {
    const useCounter = (target: number, duration: number) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const increment = Math.ceil(target / (duration / 10));
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 50);
            return () => clearInterval(timer);
        }, [target, duration]);

        return count;
    };

    const studentCount = useCounter(10000, 2000);
    const schoolCount = useCounter(500, 2000);

    return (
        <div id="about">
            <div className="mx-10 md:grid grid-cols-2 text-center items-center pb-16">
                <div>
                    <Image
                        src={"/whoweare.png"}
                        alt="Who we are"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <h1 className="text-[#9ECDF2] text-5xl font-mako my-5">WHO WE ARE</h1>
                    <p className="text-2xl font-jua">
                        AcademiX was built by educators and developers who believe technology
                        should make life easier for schools.
                    </p>
                </div>
            </div>
            <p className="md:text-4xl text-2xl text-center font-mako p-5 mx-5 my-5">
                Our mission is to empower schools worldwide with tools that save time, enhance
                accuracy, and foster collaboration.
            </p>

            <section className="md:mx-[20%] mx-4 flex md:flex-row flex-col gap-5 justify-between py-10 text-center">
                <div className="inline-block p-8 w-[300px] bg-black bg-opacity-50 rounded-lg text-white ml-5">
                    <Image src="/cardicon.png" alt="icon" width={20} height={50} />
                    <h4 className="font-mako text-5xl text-white mb-2">{studentCount.toLocaleString()}+</h4>
                    <p className="font-jua text-sm text-white">students managed using AcademiX.</p>
                </div>
                <div className="inline-block p-8 w-[300px] bg-black bg-opacity-50 rounded-lg text-white ml-5">
                    <Image src="/cardicon.png" alt="icon" width={20} height={50} />
                    <h4 className="font-mako text-5xl text-white mb-2">{schoolCount}+</h4>
                    <p className="font-jua text-sm text-white">
                        schools streamlined their workflows
                    </p>
                </div>
            </section>
        </div>
    );
}

