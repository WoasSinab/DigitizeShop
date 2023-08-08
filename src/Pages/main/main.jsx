import FilterMobile from "../../components/FilterMobile/FilterMobile"
import Navbar from "../../components/NavbarMobile/Navbar"
import ProductGridSec from "../../components/ProductGridSec/ProductGridSec"

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <FilterMobile />
      <ProductGridSec />
    </div>
  )
}

export default MainPage