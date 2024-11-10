import React from "react";
import { BiPhone } from "react-icons/bi";



const Reservation = () => {
  return (
    <div
      className="min-h-screen flex bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/images/bg-black.jpg)' }}
    >
      {/* Dark Overlay for background */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Left Side: Heading and Paragraph */}
      <div className="w-1/2 p-8 text-right flex flex-col justify-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-white mb-4">
          Do you have any coffee plans today?
        </h1>
        <p className="text-lg md:text-xl text-white">
          Treat yourself to a cozy break. Reserve your table now and enjoy the best coffee in town with a delightful experience.
        </p>
      </div>

      {/* Right Side: Reservation Form */}
      <div className="w-1/2 flex items-center justify-center p-4 md:p-6 relative z-10">
        <div className="bg-white bg-opacity-90 max-w-md w-full p-4 md:p-6 rounded-lg shadow-xl">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-3">
            Reserve Your Table
          </h1>
          <p className="text-center text-gray-700 text-sm md:text-base mb-4">
            Enjoy a cozy coffee break. Book your table for a delightful experience.
          </p>

          {/* Reservation Form */}
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            />
            <input
              type="date"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded font-semibold text-sm hover:bg-yellow-600 transition duration-300"
            >
              Book Now
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
              <BiPhone className="text-white w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-gray-900 font-semibold">Quick Order 24/7</p>
              <p className="text-yellow-500 text-base font-bold">+9123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

