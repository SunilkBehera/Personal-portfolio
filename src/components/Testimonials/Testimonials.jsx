import React, { useState } from 'react'
import Title from '../Layouts/Title'
import Slider from "react-slick";
import { testimonialOne , quote, testimonialTwo} from '../../assets';
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}


function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}



const Testimonials = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
    beforeChange: (prev, next) =>{
      setDotActive(next);
    },
    appendDots: dots => (
      <div
        style={{
        
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul 
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "20px",
          }}> 
          {" "}
          {dots} {" "}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i===dotActive ?{
            
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#FF7800",
              borderRadius: "50%",
              cursor: "pointer",
            
           
          }:{
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
      
          }
        }   
      >
       
      </div>
    )
  };


  return (
    <section id='testimonials' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='text-center'>
          <Title title="WHAT CLIENTS SAY" des="Testimonials"/>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Slider {...settings}>
          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
              <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img src={testimonialOne} alt="" className='h-72 rounded-lg object-cover'/>
                <div>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>Round - Label</p>
                  <h3 className='text-2xl font-bold'>John Dev</h3>
                  <p className='text-base tracking-wide text-gray-500'>Web Developer</p>
                </div>
              </div>
              <div className='w-[60%] h-full flex flex-col justify-between'>
                  <img src={quote} alt="" className='w-[20%]' />
                  <div className='w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-6'>
                      <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                        <div>
                          <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design</h3>
                          <p className='text-base text-gray-400 mt-3'>via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                          </p>
                        </div>
                        <div className='text-yellow-500 flex gap-1'>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                        </div>
                      </div>
                      <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius amet dolore tenetur, porro laudantium dolor. Perspiciatis, vero aperiam dolor quisquam mollitia commodi, cupiditate doloribus porro illo dicta autem, perferendis quidem!</p>
                  </div>

              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
              <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img src={testimonialTwo} alt="" className='h-72 rounded-lg object-cover'/>
                <div>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>Round - Label</p>
                  <h3 className='text-2xl font-bold'>John Dev</h3>
                  <p className='text-base tracking-wide text-gray-500'>Web Developer</p>
                </div>
              </div>
              <div className='w-[60%] h-full flex flex-col justify-between'>
                  <img src={quote} alt="" className='w-[20%]' />
                  <div className='w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-6'>
                      <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                        <div>
                          <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design</h3>
                          <p className='text-base text-gray-400 mt-3'>via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                          </p>
                        </div>
                        <div className='text-yellow-500 flex gap-1'>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                        </div>
                      </div>
                      <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius amet dolore tenetur, porro laudantium dolor. Perspiciatis, vero aperiam dolor quisquam mollitia commodi, cupiditate doloribus porro illo dicta autem, perferendis quidem!</p>
                  </div>

              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
              <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img src={testimonialOne} alt="" className='h-72 rounded-lg object-cover'/>
                <div>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>Round - Label</p>
                  <h3 className='text-2xl font-bold'>John Dev</h3>
                  <p className='text-base tracking-wide text-gray-500'>Web Developer</p>
                </div>
              </div>
              <div className='w-[60%] h-full flex flex-col justify-between'>
                  <img src={quote} alt="" className='w-[20%]' />
                  <div className='w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-6'>
                      <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                        <div>
                          <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design</h3>
                          <p className='text-base text-gray-400 mt-3'>via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                          </p>
                        </div>
                        <div className='text-yellow-500 flex gap-1'>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                          <RiStarFill/>
                        </div>
                      </div>
                      <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius amet dolore tenetur, porro laudantium dolor. Perspiciatis, vero aperiam dolor quisquam mollitia commodi, cupiditate doloribus porro illo dicta autem, perferendis quidem!</p>
                  </div>

              </div>
            </div>
          </div>


         
          
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials