import React from 'react'
import NavBar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import pic1 from "../../Assets/User3.png"
import pic2 from "../../Assets/User2.png"
import { GET_CHATS } from '../../GraphQL/chat/queries';
import { FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { useState } from 'react';
const Chat = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <NavBar />
      <div className='basis-5/6 pl-6'>
        <div className='px-4 py-4 mt-20'>
          <div className="basis-full h-screen container basis-full flex-row bg-primary-white rounded">
            <div className='p-6 container '>
              <div className='flex basis-full h-100 border-2 border-gray-400 rounded'>
                <div className='basis-1/3 border-r-2'>
                  <div className="container flex-col">
                    <div className='m-10'>
                      Search
                    </div>
                    <div className='flex flex-col'>
                      <div className='chat flex p-4'>
                        <img src={pic2} alt="room" className='rounded-full mr-2 h-14' />
                        <div className='container flex-col self-center'>
                          <div className='flex justify-between'>
                            <span><b>Samantha Rachel</b></span>
                            <span className='text-primary-gray'>17 Jun</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-sm text-primary-gray'>Thankyou for your attention</span>
                            {/* <span className='px-1 text-primary-blue bg-secondary-softblue rounded-full'>2</span> */}
                          </div>
                        </div>
                      </div>
                      <div className='chat flex p-4'>
                        <img src={pic1} alt="room" className='rounded-full mr-2 h-14' />
                        <div className='container flex-col self-center'>
                          <div className='flex justify-between'>
                            <span><b>Samantha Rachel</b></span>
                            <span className='text-primary-gray'>17 Jun</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-sm text-primary-gray'>Thankyou for your attention</span>
                            {/* <span className='px-1 text-primary-blue bg-secondary-softblue rounded-full'>2</span> */}
                          </div>
                        </div>
                      </div>
                      <div className='chat flex p-4'>
                        <img src={pic1} alt="room" className='rounded-full mr-2 h-14' />
                        <div className='container flex-col self-center'>
                          <div className='flex justify-between'>
                            <span><b>Samantha Rachel</b></span>
                            <span className='text-primary-gray'>17 Jun</span>
                          </div>
                          <div className='flex justify-between'>
                            <span className='text-sm text-primary-gray'>Thankyou for your attention</span>
                            <span className='px-1 text-primary-blue bg-secondary-softblue rounded-full'>2</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='basis-2/3 relative'>
                  <div className='border-b-2'>
                    <div className='m-6 flex'>
                      <img src={pic1} alt="room" className='rounded-full mr-2 h-14' />
                      <div className='container flex-col self-center'>
                        <span><b>Samantha Rachel</b></span>
                        <span className='text-sm text-primary-gray'>@samawa</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "540px" }} className='container flex-col overflow-auto pb-8'>
                    {/* <div className='my-8 container justify-center'>
                      <span className='text-center py-1 px-3 border-2 rounded-full'>
                        Fri, 18 Jun
                      </span>
                    </div> */}
                    <div className='container p-4 flex-col'>
                      <div className='flex'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <span>
                            <b>Samantha Rachel</b>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className='flex mt-8 justify-end'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className='flex mt-8 justify-end'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className='flex mt-8 justify-end'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className='flex mt-8 justify-end'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className='flex mt-8'>
                        <div className='max-w-xl p-4 bg-secondary-softblue rounded'>
                          <span>
                            <b>Samantha Rachel</b>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="container absolute bottom-0 left-0 right-0 bg-primary-blue py-3 px-4">
                    <input className=' bg-secondary-softblue w-full py-1 px-4 rounded' type="text" placeholder='123' />
                    <div className='ml-4' >
                      <button className='py-1 px-4 rounded ' style={{ background: "white" }}>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Chat;