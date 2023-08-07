import { useState } from "react";
import productsData from "../ProductSection/data.js"; // Import the product data from products.js

const ProductSection = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-lg p-2 ">
      <div className="mb-3 bg-gray-100 rounded-xl">
        <img src={product.img} alt="" />
      </div>

      {/* Product Desc.  */}
      <div className="flex items-center justify-between w-full mb-3">
        <span className="text-slate-200 text-sm md:text-base">{product.brand}</span>
        <div className="flex items-center">
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer bg-red-400 border-2 ${
              selectedColor === "red" ? "border-white" : "border-red-400"
            }`}
            onClick={() => setSelectedColor("red")}
          >
            {selectedColor === "red" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer bg-blue-400 border-2 ${
              selectedColor === "blue" ? "border-white" : "border-blue-400"
            } -mr-1`}
            onClick={() => setSelectedColor("blue")}
          >
            {selectedColor === "blue" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer bg-green-400 border-2 ${
              selectedColor === "green" ? "border-white" : "border-green-400"
            } -mr-1`}
            onClick={() => setSelectedColor("green")}
          >
            {selectedColor === "green" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Product Title and Price */}
      <div className="text-slate-800 text-xs font-bold mb-2 md:text-base">{product.name}</div>
      <div className="text-orange-600 font-medium text-left text-sm mb-3 md:text-base">{product.price}</div>
      <hr className="" />
      <button className="w-full font-bold text-orange-600 text-sm py-1 md:text-lg">مشاهده و سفارش</button>
    </div>
  );
};


const ProductList = () => {
  return (
    <div className="grid gap-x-2 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:gap-x-4 md:gap-x-8 md:gap-y-10">
      {productsData.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
