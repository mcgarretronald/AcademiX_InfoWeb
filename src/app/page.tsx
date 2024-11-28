import Landingpage from "./Components/Landingpage"
import Whyus from "./Components/Whyus"
import Product from "./Components/Product"
export default function Home() {
  return (
    <div className="bg-background text-white">
      <Landingpage />
      <Whyus />
      <Product />
    </div>
  )
}
