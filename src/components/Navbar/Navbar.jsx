import React from 'react'
import { Link } from 'react-scroll'
import { navLinksdata } from '../../constants'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-bodyColor w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-black/20  shadow-md'>
      <div>
        <h1 className='text-base text-transparent bg-clip-text font-bold bg-gradient-to-r from-designColor to-blue-400'>SUNIL</h1>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
         
          {
            navLinksdata.map(({_id,title, link}) => (
             <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor pt-2 hover:border-b-2 border-designColor transition-transform " key={_id}>

               <Link
               activeClass='active'
               to={link} 
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               >{title}</Link>
             </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar