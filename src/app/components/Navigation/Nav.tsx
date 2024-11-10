import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCycling, BiShoppingBag } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';

interface Props {
  openNav: () => void
} 
 const Nav = ({ openNav }: Props) => {  // Destructure props here
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        <div className="mr-4 overflow-hidden rounded-full flex items-center space-x-2">
 <Image
  src="/images/LogoImage.jpg"
  alt="Blend & Bliss by Duaa logo"
  width={70}  // Decrease the width to make the logo smaller
  height={70} // Decrease the height to match the width
  className="object-cover rounded-full"
/>


 <span className="text-black font-bold underline text-lg sm:text-xl lg:text-2xl">
        Blend & Bliss By <span className='text-black font-extrabold text-4xl tracking-tight font-sans'>Duaa</span>
      </span>
</div>
        <ul className='hidden lg:flex items-center space-x-10'>
          <li className='text-[20px] font-medium hover:text-red-700'>
            <Link href="/">Home</Link>
          </li>
          <li className='text-[20px] font-medium hover:text-red-700'>
            <Link href="/">Shop</Link>
          </li>
          <li className='text-[20px] font-medium hover:text-red-700'>
            <Link href="/">Menu</Link>
          </li>
          <li className='text-[20px] font-medium hover:text-red-700'>
            <Link href="/">Blog</Link>
          </li>
          <li className='text-[20px] font-medium hover:text-red-700'>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        <div className='flex items-center space-x-4'>
          <button className='px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-amber-900 transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white'>
            <span>
              <BiCycling className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
            </span>
            <span className='font-bold'>Order Now</span>
          </button>

          <button className='sm:px-6 sm:py-3 px-4 py-2 hover:bg-orange-500 transition-all duration-200 bg-amber-800 flex items-center rounded-md text-white'>
            <BiShoppingBag className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
          </button>

          <HiBars3BottomRight onClick={openNav}
            className='lg:hidden w-[2rem] h-[2rem] text-black'/>
        </div>
      </div>
    </div>
  );
};

export default Nav;