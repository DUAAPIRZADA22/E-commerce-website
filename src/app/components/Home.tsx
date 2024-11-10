import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import PopularCoffee from './PopularCoffee/PopularCoffee'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Feature/>
      <PopularCoffee/>
      <Delivery/>
      <Team/>
      <Reservation />
      <Newsletter/>
    </div>
  )
}

export default Home