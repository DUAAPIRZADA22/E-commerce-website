"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Hero = ()=> {
    return (
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite responsive={responsive}
          itemClass='item'
          showDots={true}
        >

       {/* 1st image section with info */}
       <div className='w-[100] h-[88vh] flex items-center justify-center flex-col bg-yellow-900  md:clip_path'>
            <div className='w-[120%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
            <Image
            src="/images/bgg1.jpg.png"
            alt="Blend & Bliss by Duaa logo"
            width={800}
            height={900}
            className='hidden md:block'/> 
             <div>
               <h1 className='text-[40px] font-semibold text-orange-400'>
                Coffee: The Ultimate Comfort
                </h1>
                <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>
                  Best <br/> coffee
                </h1>
                <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
                Start your day with the warmth and energy of a perfect cup of coffee.<br/>
                Awaken your senses with our expertly <br/> brewed coffee, the perfect way to begin your day!!
                </p>
                <button className='mt-[2rem] px-8 py-3 text-[16px] bg-amber-900 transition-all duration-200 hover:bg-orange-800
                 flex items-center rounded-md space-x-2 text-white'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]' />
            </span>
            <span className='font-bold'>Order Now</span>
          </button>
            </div>
            </div>
            </div>
              
              {/* 2nd image with info */}
            <div className='w-[100] h-[88vh] flex items-center justify-center flex-col bg-orange-950  md:clip_path'>
            <div className='w-[120%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
            <Image
            src="/images/bgg2.jpg.png"
            alt="Blend & Bliss by Duaa logo"
            width={800}
            height={900}
            className='hidden md:block'/> 
             <div>
               <h1 className='text-[40px] font-semibold text-orange-400'>
               Sip, Savor, Smile 
                </h1>
                <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>
                Golden <br/> Beans
                </h1>
                <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
                Freshly brewed, perfectly crafted – your perfect coffee moment awaits.<br/>
                Indulge in the luxurious taste of our premium coffee blends, made just for you.
                </p>
                <button className='mt-[2rem] px-8 py-3 text-[16px] bg-yellow-700 transition-all duration-200 hover:bg-pink-950
                 flex items-center rounded-md space-x-2 text-white'>
            <span>
              <BiCycling className='w-[1.7rem] h-[1.7rem]' />
            </span>
            <span className='font-bold'>Order Now</span>
          </button>
            </div>
            </div>
            </div>
        </Carousel>
    );
  };

export default Hero;