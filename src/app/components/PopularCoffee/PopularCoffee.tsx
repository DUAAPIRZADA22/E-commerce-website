"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import CoffeeCard from './CoffeeCard';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

const PopularCoffee = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
        <h1 className='heading'> Our Popular
             <span className='text-orange-700'> Coffee's</span>
             </h1>
    
     <div className='w-[80%] mt-[4rem] mx-auto'>
     <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={4000}
     centerMode={false}
     infinite
     responsive={responsive}
     itemClass='item'
     showDots={false}
     >

   <CoffeeCard
    title="Caramel Macchiato"
    image="/images/mocha.jpg" 
    reviews="1270"
    reviewText='Decadent caramel mocha with rich, smooth chocolate and a hint of espresso. A true indulgence!'
    price="5.50"
    />

<CoffeeCard
    title="Hot Chocolate"
    image="/images/hotchoc.jpg" 
    reviews="1120"
    reviewText='Smooth, velvety hot chocolate with rich cocoa flavor; a cozy, comforting treat
     perfect for any chilly day.'
    price="3.00"/>

<CoffeeCard
    title="Americano Coffee"
    image="/images/Americano.jpg" 
    reviews="043"
    reviewText='Bold and smooth, Americano offers a deep, robust coffee flavor with a clean finish.'
    price="10.88"/>

    <CoffeeCard
    title="Frappucino"
    image="/images/Frappucino.jpg" 
    reviews="967"
    reviewText='Refreshing and creamy Frappuccino with a perfect blend of coffee, ice, and a sweet finish.'
    price="5.00"/>

<CoffeeCard
    title="Irish Coffee"
    image="/images/irishc.jpg" 
    reviews="1160"
    reviewText='Rich and smooth Irish coffee, infused with whiskey and topped with velvety whipped cream. Perfectly cozy'
    price="6.00"/>

<CoffeeCard
    title="Latte"
    image="/images/latte.jpg" 
    reviews="1143"
    reviewText='Smooth and creamy latte with a perfect balance of espresso and steamed milk. A comforting classic.'
    price="4.50"/>

<CoffeeCard
    title="Cold Brew"
    image="/images/coldbrew.jpg" 
    reviews="1280"
    reviewText='Bold and refreshing cold brew with a smooth, rich flavor, perfect for a caffeine boost'
    price="1.75"/>

<CoffeeCard
    title="Black Coffee"
    image="/images/blackcoffee.jpg" 
    reviews="1050"
    reviewText='Strong and invigorating black coffee with a pure, robust flavor. Simple, yet perfectly energizing'
    price="2.50"/>

<CoffeeCard
    title="Cappucino"
    image="/images/cappucino.jpg" 
    reviews="1145"
    reviewText='Frothy and creamy cappuccino with a perfect balance of espresso, steamed milk, and a dusting of cocoa.'
    price="4.00"/>

<CoffeeCard
    title="Turkish Coffee"
    image="/images/turkish.jpg" 
    reviews="1270"
    reviewText='Rich and intense Turkish coffee with a thick, velvety texture and a deep, aromatic flavor.'
    price="3.50"/>

</Carousel>
     </div>

    </div>
  )
}

export default PopularCoffee;

