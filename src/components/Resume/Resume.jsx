import React, { useState } from 'react'
import Title from '../Layouts/Title'
import Experience from './Experience'
import Education from './Education';
import Skills from './Skills'



const Resume = () => {

  const[education,setEducation]=  useState(true);
  const[skills,setSkills]=  useState(false);
  const[experience,setExperience]=  useState(false);



  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='text-center'>
          <Title title="3 YEARS OF EXPERIENCE" des="My Resume"/>

      </div>
      <div>
        <ul className='w-full mx-auto grid grid-cols-3 text-center'>
          <li 
            onClick={()=>setEducation(true) &
            setSkills(false) &
            setExperience(false)
          } 
          className={`${education ? " border-designColor rounded-lg": " border-transparent " } resumeli`}>
            Education
          </li>
          <li 
            onClick={()=>setEducation(false) &
            setSkills(true) &
            setExperience(false)
          } 
          className={`${skills ? " border-designColor rounded-lg": " border-transparent " } resumeli`}>
            Professional Skills
          </li>
          <li 
            onClick={()=>setEducation(false) &
            setSkills(false) &
            setExperience(true)
          } 
          className={`${experience ? " border-designColor rounded-lg": " border-transparent " } resumeli`}>
           Job Experience</li>
        </ul>
      </div>

      {
        education && <Education/>

      }
      {
        skills && <Skills/>
      }
      {
        experience && <Experience/>
      }
      {/* <Education/> */}
      {/* <Skills/> */}
      {/* <Experience/> */}
    </section>
  )
}

export default Resume