import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';


const Banner = () => {


  return (
    <section id='home' className='w-full pt-10 py-20 flex items-center border-b-[1px] border-black font-titleFont'>

      <LeftBanner/>
      <RightBanner/>
     
    </section>
  )
}

export default Banner