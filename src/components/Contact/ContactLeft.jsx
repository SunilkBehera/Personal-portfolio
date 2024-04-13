import React from 'react'
import { contactImg } from '../../assets/index'
import { FaGithub,  FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
    <img src={contactImg} alt="" 
    className='w-full h-64 object-cover rounded-lg mb-2'/>
    <div className='flex flex-col gap-4'>
      <h3 className='text-3xl font-bold text-white'>Sunil Kumar Behera</h3>
      <p className='text-lg font-normal text-gray-400'>Full Stack Developer</p>
      <p className='text-base text-gray-400 tracking-wide'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ratione vitae illum ea minima maiores.
      </p>
      <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>+91 9040104177</span>
      </p>
      <p className='text-base text-gray-400 flex items-center gap-2'>
        Email: {" "}
        <span className='text-lightText'>
          sunil01090@gmail.com
        </span>
      </p>
    </div>

    <div className='flex flex-col gap-4'>
      <h2 className='text-base uppercase font-titleFont mb-4 text-designColor'>Find me in</h2>
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
</div>
  )
}

export default ContactLeft