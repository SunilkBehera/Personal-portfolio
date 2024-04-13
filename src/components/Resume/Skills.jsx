import React from 'react'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} className='w-full flex gap-10'>
      
    <div className='w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>Features</p>
          <h2 className='text-4xl font-bold'>Frontend Skills</h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-6 '>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>HTML5</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}}

                className='w-[85%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>85%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>CSS3</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}}

                className='w-[80%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>BOOTSTRAP</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[65%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>65%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>JAVASCRIPT</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[60%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>60%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>TAILWIND</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>85%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>REACTJS</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>70%</span>
                </motion.span>
              </span>
            </div>
        </div>
    </div>





    <div className='w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>Features</p>
          <h2 className='text-4xl font-bold'>
            Backend Skills 
          </h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-6 '>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>JAVA</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}}

                className='w-[65%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>65%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>SQL</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}}

                className='w-[80%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>JDBC</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[65%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>65%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>HIBERNATE</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[60%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>60%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>SPRING</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>85%</span>
                </motion.span>
              </span>
            </div>
            <div className='overflow-x-hidden'>
              <p className='text-sm font-medium'>SPRINGBOOT</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{x: "-100%" , opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration:.5 , delay: .5}} 
                
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 to-orange-600 rounded-md relative'>
                  <span className='absolute -top-8 right-0'>70%</span>
                </motion.span>
              </span>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default Skills