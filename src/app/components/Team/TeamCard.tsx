import React from 'react'
import Image from 'next/image'

interface Props{
    image: string;
    name: string;
    position: string;
    detail: string;
}

const TeamCard = ({ image, name, position, detail }: Props) => {
    return (
      <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto my-6'>
        <div className="flex flex-col items-center">
          <Image 
            src={image}
            alt={name}
            width={300}
            height={300}
            className='rounded-2xl'
          />
  
          <h1 className='text-[28px] sm:text-[32px] md:text-[36px] text-gray-500 mt-4 text-center font-bold'>
            {name}
          </h1>
  
          {/* Smaller Position Box */}
          <p className='mt-2 mb-4 px-3 py-1 bg-green-500 text-white rounded-md text-sm font-medium'>
            {position}
          </p>
  
          {/* Centered Detail Text */}
          <p className='text-center md:w-[80%] mx-auto text-gray-600 text-sm sm:text-base'>
            {detail}
          </p>
        </div>
      </div>
    )
  }
  
  export default TeamCard;
  