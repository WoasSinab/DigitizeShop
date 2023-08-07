import FilterMobile from "../../components/FilterMobile/FilterMobile"
import Navbar from "../../components/NavbarMobile/Navbar"
import ProductSection from "../../components/ProductSection/ProductSection"

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <FilterMobile />
      <ProductSection />
    </div>
  )
}

export default MainPage