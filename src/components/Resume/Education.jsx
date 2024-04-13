import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'

const Education = () => {
  return (
  <motion.div 
  initial={{opacity:0}} 
  animate={{opacity:1, transition:{duration:.5}}} className='w-full flex gap-10'>

    <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2011-2019</p>
          <h2 className='text-4xl font-bold'>Education Qualification</h2>
        </div>
        <div className='mt-14 w-[1180px] h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
              title="MBA in Finance & HR"
              subTitle="NIT, Rourkela (2017 - 2019)"
              result="7.45/10"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="B.Tech in Information Technology"
              subTitle="SuperKing College (2011 - 2015)"
              result="6.77/10"
              des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
            {/* <ResumeCard
              title="Secondary School Education"
              subTitle="Kingstar Secondary School (1998 - 2000)"
              result="5.00/5"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            /> */}
        </div>
    </div>

    {/* <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2015-2023</p>
          <h2 className='text-4xl font-bold'>
            Job Experience 
          </h2>
        </div>
        <div className='mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title="Internship"
              subTitle="ExcelR - (2023 - Present)"
              result="INDIA"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCard
              title="Desk Assistant"
              subTitle="NIT, Rourkela - (2022 - 2023)"
              result="INDIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="Nike - (2020 - 2011)"
              result="Oman"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
        </div>
    </div> */}
</motion.div>
  )
}

export default Education