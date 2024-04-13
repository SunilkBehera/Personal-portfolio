import React from 'react'
import Title from '../Layouts/Title'
import Cards from './Cards'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";




const Features = () => {
  return (
    <section id='features' className='w-full py-20  border-b-[1px] border-b-black'>
     <Title title='features' des='What I Do'/>
     <div className='grid grid-cols-3 gap-20'>
      <Cards 
      title='Web Design'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      icon={<AiFillAppstore />}
    />
      <Cards 
      title='Responsive layouts'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      icon={<FaMobile />}
    />
    <Cards 
      title='Web Development'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      
    />
    <Cards 
      title='UI Design'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      icon={<FaGlobe />}
    />
    <Cards 
      title='Web Design'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      icon={<SiProgress />}
    />
    <Cards 
      title='Web Design'
      des='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium est ullam corrupti! Dolorem voluptatibus asperiores neque ab alias harum tempora sunt. '
      icon={<SiAntdesign />}
    />
     </div>
    </section>
  )
}

export default Features