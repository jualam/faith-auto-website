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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section using the banner component */}
      <Banner />
      <div className="container mx-auto p-4 grid grid-cols-4 gap-4">
        {/* Sidebar (Brand Names & Types) */}
        <div className="col-span-1 bg-green-400 p-4 text-white">
          <h2 className="text-xl font-semibold">Brand Names</h2>
          <p>Types</p>
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-4">
          {/* Featured Vehicles */}
          <div className="bg-red-400 p-10 text-white text-center">
            <h2 className="text-2xl font-bold">Featured Vehicles</h2>
            <p>Mainly in stock, carousel type</p>
          </div>

          {/* Contact & Map Section */}
          <div className="bg-yellow-400 p-10 text-white text-center">
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
