import { useState } from 'react'
import React from 'react'
import Title from '../Layouts/Title'
import ContactLeft from './ContactLeft'

const Contact = () => {

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

const handleSend=(e) => {
  e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='text-center'>
            <Title title="Contact" des="Contact Me"/>
        </div>

        <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
              <ContactLeft/>
              <div className='w-[60%] h-full flex flex-col gap-8 p-8 justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne'>
                <form className='w-full  flex flex-col gap-6 py-8'>

                  {
                    errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                  )}

                  {
                    successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                  )}

                    <div className=' w-full flex gap-10'>
                      <div className='w-1/2 flex flex-col gap-4'>
                          <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                          <input 
                              className={`${errMsg === "Username is required!" &&
                             "outline-designColor"
                              } contactText`} 
                              type="text" 
                              onChange={(e)=>setUsername(e.target.value)} 
                              value={username}/>
                      </div>
                      <div className='w-1/2 flex flex-col gap-4'>
                          <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                          <input 
                           className={`${errMsg === "Phone Number is required!" &&
                           "outline-designColor"
                            } contactText`} 
                          type="text" onChange={(e)=>setPhoneNumber(e.target.value)} 
                          value={phoneNumber}/>
                      </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                       <p className='text-sm text-gray-400 uppercase tracking-wide'>EMAIL ID
                       </p>
                        <input 
                         className={`${errMsg === "Email is required!" &&
                         "outline-designColor"
                          } contactText`} 
                        type="email" onChange={(e)=>setEmail(e.target.value)} 
                        value={email}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                       <p className='text-sm text-gray-400 uppercase tracking-wide'>SUBJECT
                       </p>
                        <input 
                         className={`${errMsg === "Subject is required!" &&
                         "outline-designColor"
                          } contactText`} 
                        type="text" 
                        onChange={(e)=>setSubject(e.target.value)} 
                        value={subject}/>
                    </div>
                    <div className='flex flex-col gap-4'>
                       <p className='text-sm text-gray-400 uppercase tracking-wide'>MESSAGE
                       </p>
                        <textarea 
                         className={`${errMsg === "Message is required!" &&
                         "outline-designColor"
                          } contactMessage`} 
                        cols="30" rows="8" 
                        onChange={(e)=>setMessage(e.target.value)} 
                        value={message}></textarea>
                    </div>
                  <div className='w-full'>
                    <button  onClick={handleSend} className='w-full h-12 rounded-lg text-base bg-[#141518] text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
                  </div>

                  {
                    errMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                  )}

                  {
                    successMsg && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Contact