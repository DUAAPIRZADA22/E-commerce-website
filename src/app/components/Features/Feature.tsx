import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='heading text-center'>
        Coffee made with <br /> love and
        <span className='text-red-600'> Care</span>
      </h1>

      {/* Cards */}
      <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem]'>

        {/* 1st Card */}
        <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
          <Image
            src='/images/bg2.jpg.jpg' 
            alt="coffee"
            width={800}
            height={600}
            className='object-cover w-full h-[200px]' 
          />
          <div className='p-6 flex flex-col items-center text-center'>
            <h1 className='text-[24px] text-black font-semibold mb-2'>
              Our Coffee
            </h1>
            <p className='text-black text-opacity-70 text-sm'>
              Our coffee is a hug in a mug—comforting, rich, and always satisfying.
            </p>
          </div>
        </div>

       {/* 2nd card */}
        <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 mt-12'>
          <Image
            src='/images/images.jpg' 
            alt="coffee"
            width={800}
            height={600}
            className='object-cover w-full h-[200px]' 
          />
          <div className='p-6 flex flex-col items-center text-center'>
            <h1 className='text-[24px] text-black font-semibold mb-2'>
              Your Opinion Is Important
            </h1>
            <p className='text-black text-opacity-70 text-sm'>
              We value your feedback and believe it’s essential in helping us grow. Share your thoughts, 
              and let’s craft an even better experience together. Your voice matters!
            </p>
          </div>
        </div>

        {/* 3rd Card */}
        <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
          <Image
            src='/images/coffeeshake.jpg' 
            alt="coffee"
            width={800}
            height={600}
            className='object-cover w-full h-[200px]' 
          />
          <div className='p-6 flex flex-col items-center text-center'>
            <h1 className='text-[24px] text-black font-semibold mb-2'>
              Coffee Shakes
            </h1>
            <p className='text-black text-opacity-70 text-sm'>
              Our coffee shake blends rich, bold coffee with creamy milk for a smooth, refreshing treat. Topped with whipped cream,
              it's the perfect balance of sweetness and caffeine to energize your day.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Feature;
