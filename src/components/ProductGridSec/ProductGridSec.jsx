import MdSidebar from "../MD-Sidebar/MdSidebar";
import MdSortbar from "../MD-Sortbar/MdSortbar";
import ProductSection from "../ProductSection/ProductSection";

const ProductGridSec = () => {
  return (
    <div>
      <div className='grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8'>
        {/* sideBar */}
        <div className='col-span-4 lg:col-span-3 hidden md:block row-span-2 '>
          <MdSidebar />
        </div>

        {/* sortBar */}
        <div className='col-span-8 lg:col-span-9  hidden md:block '>
          <MdSortbar />
        </div>

        {/* productSec */}
        <div className='col-span-12 md:col-span-8 lg:col-span-9 '>
          <ProductSection />
        </div>
      </div>
    </div>
  );
};

export default ProductGridSec;
