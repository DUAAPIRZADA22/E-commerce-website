import React from 'react'
import TeamCard from './TeamCard'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
            Meet Our Expert <span className='text-red-800'> Chef's</span>
        </h1>

        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
         <TeamCard 
         image="/images/t1.jpg"
         name="John Doe"  
         position="Kitchen Porter"
         detail="a dedicated Kitchen Porter, ensuring that the kitchen remains organized and well-stocked.
          With a keen eye for cleanliness, he supports the kitchen
          staff by handling daily tasks such as dishwashing, ingredient prep, and maintaining the kitchen's hygiene."
         />

         <TeamCard 
          image="/images/t2.jpg"
         name="Jane Smith "  
         position="Executive Chef"
         detail=" our Executive Chef, brings over 10 years of culinary expertise. She leads the kitchen with creativity and
          precision, curating a menu that blends traditional flavors with modern techniques.
          Her passion for fine dining and dedication to her craft makes her a true leader in the kitchen"
         />

         <TeamCard  
         image="/images/t3.jpg"
         name="David Jonson"  
         position="Head Chef"
         detail="our Head Chef, is the visionary behind our kitchen's culinary direction. With over 15 years of experience, 
         he excels at balancing innovation with tradition. David oversees the menu development, manages kitchen operations, 
         and ensures that every dish that leaves the kitchen is of the highest quality.His leadership and attention to
          detail set the standard for our kitchen's success."
         />
        </div>
    </div>
  )
}

export default Team