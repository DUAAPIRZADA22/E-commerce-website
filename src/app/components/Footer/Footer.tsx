import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-orange-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[4rem] gap-y-[3rem] items-start'>

        {/* Left Section (Logo, Name, and Contact) */}
        <div className="mr-4 overflow-hidden flex flex-col items-start space-y-4">
          <Image
            src="/images/LogoImage.jpg"
            alt="Blend & Bliss by Duaa logo"
            width={70}  
            height={70} 
            className="object-cover rounded-full"
          />
          <span className="text-black font-bold underline text-lg sm:text-xl lg:text-2xl">
            Blend & Bliss By <span className='text-black font-extrabold text-4xl tracking-tight font-sans'>Duaa</span>
          </span>
          <p className='mt-[1rem] text-white text-sm sm:text-base md:text-lg'>
            support@Blend&BlissbyDuaa.com
          </p>
          <p className='text-red-600 text-[19px] sm:text-[20px] md:text-[22px] font-bold'>
            +(123) 345 678 923
          </p>
        </div>

        {/* Quick Links (Center aligned with more gap) */}
        <div className="flex flex-col items-center space-y-5">
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>
            Quick Links
          </h1>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
            Home
          </p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
            About
          </p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
            Menu
          </p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer'>
            Newsletter
          </p>
        </div>

        {/* Opening Hours Section  */}
        <div className="flex flex-col items-start ml-auto space-y-4">
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>
            Opening Hours:
          </h1>
          <p className='text-white text-[18px]'>
            Monday - Friday <span className='text-orange-400'> 8 am - 04 pm</span>
            <br />
            Saturday - Sunday <span className='text-orange-400'> 12 pm - 12 am</span>
          </p>

          {/* Social Media Icons  */}
          <div className='flex mt-[2rem] space-x-6'>
            <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
            <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-600'/>
            <FaLinkedin className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
