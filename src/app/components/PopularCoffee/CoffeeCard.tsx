
import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';


interface Props {
  image: string;
  price: string;
  reviews: string;
  title: string;
  reviewText: string;
}

const CoffeeCard = ({ image, price, reviews, title, reviewText }: Props) => {
  return (
    <div className='bg-white p-5 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out m-4 
    max-w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]'>

      {/* Image Section */}
      <div className='w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-md'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={220}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Title Section */}
      <h2 className='mt-4 text-lg sm:text-xl font-semibold text-gray-900'>{title}</h2>

      {/* Stars and Reviews Section */}
      <div className='flex items-center mt-2'>
        <div className='flex items-center space-x-1'>
          <FaStar className='text-yellow-500 w-4 h-4' />
          <FaStar className='text-yellow-500 w-4 h-4' />
          <FaStar className='text-yellow-500 w-4 h-4' />
          <FaStar className='text-yellow-500 w-4 h-4' />
          <FaStar className='text-yellow-500 w-4 h-4' />
        </div>
        <div className='ml-2 text-xs sm:text-sm text-gray-600'>({reviews} reviews)</div>
      </div>

      {/* Unique Review Text */}
      <p className='mt-2 text-xs sm:text-sm text-gray-700 text-opacity-80 leading-tight'>
        {reviewText}
      </p>

      {/* Price and Button Section */}
      <div className='flex items-center justify-between mt-3'>
        <h1 className='text-base sm:text-lg font-bold text-red-600'>${price}</h1>
        <button className='px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white'>
          <BiShoppingBag className='w-[1.3rem] h-[1.3rem]' />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;