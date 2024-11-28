import Landingpage from "./Components/Landingpage"
import Whyus from "./Components/Whyus"
import Product from "./Components/Product"
import Aboutus from "./Components/AboutUs"
import ContactUs from "./Components/Contact"
import Footer from "./Components/Footer"
export default function Home() {
  return (
    <div className="bg-background text-white">
      <Landingpage />
      <Whyus />
      <Product />
      <Aboutus/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
