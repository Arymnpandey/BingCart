import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex-col justify-between">
        <div className="flex justify-center font-extrabold text-2xl p-6">
          BingCart
        </div>
        <div className="flex justify-evenly w-1/3 mx-auto font-semibold">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/" className="hover:text-gray-300">
            Shop
          </a>
          <a href="/" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
