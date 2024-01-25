import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ProductSection = ({ products }) => {
  return (
    <div className="container mx-auto mt-8 mb-12 w-[90%]">
      <h2 className="text-3xl font-bold mb-4 mx-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-md shadow-lg overflow-hidden cursor-pointer ease-in-out transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <div className="mb-2 text-gray-700">{product.category}</div>
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <div className="text-gray-800">INR {product.price.toFixed(2)}</div>
            <button className="mt-4 justify-between flex text-black py-2 px-4 rounded-3xl border-2 border-black hover:bg-gray-700 hover:text-white">
              <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
              <p className="ml-2 font-bold tracking-wide">Add to cart</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
