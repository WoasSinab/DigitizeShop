import { useState } from "react";
import productsData from "../ProductSection/data.js";

const colorImages = {
  red: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6Y3ref_VW_34FR+watch-40-alum-starlight-cell-se_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=png",
  blue: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/FKN13_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1647901120718",
  green: "https://www.playforce.sg/cdn/shop/files/11_86715052-a380-46be-aefd-3b8b46674014_1024x1024.png?v=1688127996",
  default: "https://www.playforce.sg/cdn/shop/files/11_86715052-a380-46be-aefd-3b8b46674014_1024x1024.png?v=1688127996",
};

const ProductSection = ({ product }) => {
  const { brand, name, price } = product;
  const [selectedColorIndex, setSelectedColorIndex] = useState(-1);

  // 🎨 Handle click on color option
  const handleColorClick = (colorIndex) => {
    setSelectedColorIndex(colorIndex);
  };

  // 🖼️ Get the image URL based on the selected color
  const getImageUrl = () => {
    const colorOptions = ["red", "blue", "green"];
    const selectedColor = colorOptions[selectedColorIndex];
    return colorImages[selectedColor] || colorImages["default"];
  };

  return (
    <div className='bg-white rounded-xl shadow-lg p-2'>
      <div className='mb-3 bg-gray-100 rounded-xl'>
        <img src={getImageUrl()} alt='' />
      </div>

      {/* Product Desc. */}
      <div className='flex items-center justify-between w-full mb-3'>
        {/* 🏷️ Brand */}
        <span className='text-gray-500 text-sm md:text-base'>{brand}</span>
        <div className='flex items-center'>
          {["red", "blue", "green"].map((color, index) => (
            <div key={color} className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer bg-${color}-400 border-2 ${selectedColorIndex === index ? "border-white" : `border-${color}-400`}`} onClick={() => handleColorClick(index)}>
              {/* ✅ Show checkmark icon if color is selected */}
              {selectedColorIndex === index && (
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4 stroke-white'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Product Title and Price */}
      <div className='text-gray-800 text-xs font-bold mb-2 md:text-base'>{name}</div>
      <div className='text-orange-600 font-medium text-left text-sm mb-3 md:text-base'>{price}</div>
      <hr className='border-gray-300 mb-2' />
      {/* 🛍️ Button to view and order */}
      <button className='w-full font-bold text-orange-600 text-sm py-1 md:text-lg'>مشاهده و سفارش</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className='grid gap-x-2 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:gap-x-4 md:gap-x-8 md:gap-y-10'>
      {/* 📋 Map through product data and render ProductSection */}
      {productsData.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
