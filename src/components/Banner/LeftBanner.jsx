import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithub,  FaLinkedinIn, FaReact, FaHtml5 , FaCss3 } from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";




const LeftBanner = () => {

  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  
  return (
    <div className='w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-5'>
      <h4 className='text-lg font-normal'>WELCOME TO MY PROFILE</h4>
      <h1 className='text-4xl font-bold text-white'> {" "}Hi, I'm  {" "}
        <span className='text-designColor capitalize'>Sunil Kumar Behera</span>
      </h1>
      <h2 className='text-4xl font-bold text-white'>a <span>{text} </span>
      <Cursor
        cursorBlinking='false'
        cursorStyle='|'
        cursorColor='#FF7800'
      /></h2>
      <p className='text-base font-bodyFont leading-6 tracking-wide text-justify'>
        Enthusiastic and dedicated Fullstack Developer seeking an entry-level position to leverage skills in both frontend and backend development to contribute effectively to dynamic and innovative projects.Hands-on experience in designing, developing, and implementing applications and solutions using a range of technologies and have hands-on technical expertise in a challenging role.

      </p>
    </div>
    <div className='flex justify-between'>
      <div>
          <h2 className='text-base uppercase font-titleFont mb-4 text-designColor'>
            Find me in
          </h2>
          <div className='flex gap-4'>
            <span className='bannericon'>
              <a href="https://github.com/sunil-k-behera10"><FaGithub/></a>
            </span>
            <span className='bannericon'>
              <a href="https://www.linkedin.com/in/sunil-k-behera-8757142a5/"> <FaLinkedinIn/></a>
            </span>
            <span className='bannericon'>
              <a href="https://mail.google.com/"> <MdOutlineMail/></a>
            </span>
          </div>
      </div>
      
      <div>
        <h2 className='text-base uppercase font-titleFont mb-4 text-designColor'>BEST SKILL ON</h2>
       <div className='flex gap-4'>
            <span className='bannericon'>
              <FaReact/>
            </span>
            <span className='bannericon'>
              <SiTailwindcss/>
            </span>
            <span className='bannericon'>
              <FaHtml5/>
            </span>
            <span className='bannericon'>
              <FaCss3/>
            </span>
            <span className='bannericon'>
              <IoLogoJavascript/>
            </span>
        </div>
      </div>
    </div>
    <div className='w-[200px]'>
        <a href="abc.pdf" download="abc.pdf" className='w-[200px]'> 
            <button  className='w-[200px] border-none group px-6 my-2 py-4 flex items-center justify-center bg-orange-500  rounded-lg border-b-[1px] border-b-gray-600 text-white font-bold '>
              Download CV
            </button>
        </a>
    </div>
   
             
  </div>
  )
}

export default LeftBanner