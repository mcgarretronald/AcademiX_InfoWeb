import CustomSlider from "../Carousel"
export default function Product() {
    return (
        <div className="py-10">
            <h1 className="text-center font-mako md:text-5xl  text-3xl p-5 mb-5">Your All-in-One School Management Solution.</h1>
            <div className="md:flex px-8">
            <div className="md:w-1/2 flex items-center ">
                <CustomSlider />
            </div>
            <div className="md:w-1/2 flex items-center font-jua md:text-4xl text-2xl text-center mt-4">
                <p>AcademiX brings together all essential tools to streamline school operations and enhance productivity.</p>
            </div>
            </div>
            
        </div>
    )
}