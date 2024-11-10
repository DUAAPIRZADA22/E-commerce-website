import React from 'react'

const Newsletter = () => {
    return (
      <div className="pt-[5rem] pb-[5rem]">
        <div className="text-center">
          <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
            Join for hot offers!
          </h1>
  
          <p className="text-black text-opacity-70 mx-auto mt-4 text-sm sm:text-base md:text-lg max-w-[600px]">
            Craving a quick coffee break? We are here to serve you the best hot drinks and snacks, freshly prepared just for you.
            Whether it is a busy morning or a lazy afternoon, we are always ready to deliver your favorite treats with speed and perfection.
            Join us now and satisfy your cravings instantly!
          </p>
  
          <div className="flex items-center space-x-2 mt-[3rem] justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-5 py-3 bg-gray-200 w-[300px] sm:w-[350px] md:w-[400px] rounded-lg placeholder:text-black text-sm sm:text-base"
            />
  
            <button className="px-6 py-3 bg-yellow-950 hover:bg-green-800 transition-all duration-200 rounded-lg text-white font-bold text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  