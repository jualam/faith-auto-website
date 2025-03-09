import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

//importing swiper modules to implement carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import Tesla from "../../assets/Car_Images/Tesla.jpg";
import BMW from "../../assets/Car_Images/BMW.jpg";
import Ford from "../../assets/Car_Images/Ford.jpg";

// Brand names
const brandNames = [
  "Tesla",
  "BMW",
  "Ford",
  "Toyota",
  "Honda",
  "Nissan",
  "Cherry",
  "BYD",
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Banner Section using the banner component */}
      <Banner />
      <div className="container mx-auto p-4 grid grid-cols-4 gap-10">
        {/* Sidebar (Brand Names & Types) */}
        <div className="col-span-1 bg-gray-700 p-4 text-white rounded-lg ml-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Brand Names</h2>
          <ul className="space-y-2">
            {brandNames.map((brand, index) => (
              <li
                key={index}
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                {brand}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-3">Types</h2>
          {/* You can add car types here if needed */}
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-4">
          {/* Featured Vehicles */}
          <div className="bg-red-900 p-10 text-white text-center">
            <h2 className="text-2xl font-bold">Featured Vehicles</h2>
            <p>Mainly in stock, carousel type</p>
          </div>

          {/* Contact & Map Section */}
          <div className="bg-yellow-900 p-10 text-white text-center">
            <h2 className="text-2xl font-bold">Contact & Map</h2>
          </div>
        </div>
      </div>
      {/* Get Started Button */}
      <div className="text-center mt-10">
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

// Banner Component
const Banner = () => {
  const carImages = [BMW, Ford, Tesla];

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-80"
      >
        {carImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingPage;
