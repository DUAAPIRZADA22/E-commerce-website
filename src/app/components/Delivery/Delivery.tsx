import Image from 'next/image'
import React from 'react'
import { BsDoorOpen } from 'react-icons/bs'
import { RiDrinks2Fill, RiEBike2Fill } from 'react-icons/ri'

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center'>
            <div className=''>
                <Image 
                src="/images/delivery.svg"
                alt='delivery image'
                width={550}
                height={550}
                />
            </div>

            <div className='lg:text-left'>
                <h1 className='text-[30px] md:text-[40px] text-gray-800 lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
                    Your <span className='text-red-800'> Favourite Coffee </span> On The Way
                </h1>
                <p className='text-gray-600 text-sm md:text-base'>
                    Get your favorite coffee delivered straight to your doorstep, fresh and hot!
                    Enjoy a warm cup of comfort, wherever you are, with fast and reliable delivery.
                </p> 
                <div className='flex items-center space-x-3 mt-[2rem]'>
                    <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600'/>
                    <h1 className='text-[18px] text-black uppercase font-medium'> Delivery in just 30-40 minutes.</h1>
                </div>
                <div className='flex items-center space-x-3 mt-[1rem]'>
                    <RiDrinks2Fill className='w-[2rem] h-[2rem] text-red-600'/>
                    <h1 className='text-[18px] text-black uppercase font-medium'> Free shipping from 10$.</h1>
                </div>
                <div className='flex items-center space-x-3'>
                    <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600 mt-[1rem]'/>
                    <h1 className='text-[18px] text-black uppercase font-medium'>Delivery on your door steps.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery
