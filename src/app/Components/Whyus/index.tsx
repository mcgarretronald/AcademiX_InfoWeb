
import Image from "next/image"
export default function Whyus() {
    return (
        <div className="py-14 text-white">
            <h1 className="font-mako md:text-[40px] text-3xl text-center pb-4 ">Why Choose Academi X?</h1>
            <p className="font-jua md:text-[20px] text-sm text-center">Empowering schools with cutting-edge technology and personalized support.</p>
            <div className="md:grid md:grid-cols-3 md:mx-10  mx-1  mt-12 items-center">
                {/* Section 1 */}
                <section className="mb-10">
                    {/* card one */}
                    <div className=" inline-block p-8 w-[300px] bg-black bg-opacity-50 rounded-lg text-white ml-5">
                        <Image
                            src="/cardicon.png"
                            alt="icon"
                            width={20}
                            height={50}
                            
                        />
                        <h4 className="font-mako text-lg text-white mb-2">Proven Results</h4>
                        <p className="font-jua text-sm text-white">
                            Trusted by schools to save time and improve accuracy
                        </p>
                    </div>

                </section>

                {/* Section 2 */}
                <section>
                <div className="inline-block p-8 w-[300px] bg-black bg-opacity-50 rounded-lg text-white ml-5">
                        <Image
                            src="/cardicon.png"
                            alt="icon"
                            width={20}
                            height={50}
                            
                        />
                        <h4 className="font-mako text-lg text-white mb-2">User-Friendly Design</h4>
                        <p className="font-jua text-sm text-white">
                        Intuitive dashboards built for educators, not tech experts
                        </p>
                    </div>

                    <div>
                        <Image
                        src={"/whyus.png"}
                        alt="why us"
                        width={700}
                        height={700}
                        className="md:ml-[-20px] ml-0 "/>
                    </div>

                </section>

                {/* Section 3 */}
                <section>
                <div className=" inline-block p-8 w-[300px] bg-black bg-opacity-50 rounded-lg text-white ml-5">
                        <Image
                            src="/cardicon.png"
                            alt="icon"
                            width={20}
                            height={50}
                            
                        />
                        <h4 className="font-mako text-lg text-white mb-2">Simplified Operations</h4>
                        <p className="font-jua text-sm text-white">
                        Manage attendance, schedules, and reports effortlessly.
                        </p>
                    </div>

                </section>
            </div>
        </div>
    )
}
