import React from 'react'

const contact = () => {
  return (
    <div name='CONTACT US'>
    <div className=' bg-gradient-to-r from-blue-900 to-purple-900 items-center pb-40'>
       <h2 className='text-center text-green-500 text-6xl pt-10 pb-10'> CONTACT US </h2>

<div className='m-10'>
                    <form action='https://getform.io/f/c73b689e-c58f-4644-877c-e2c79096ae99' method='POST' className=' mx-auto flex flex-col w-full md:w-1/2'>
                      <input type="text" name='Name' placeholder='Enter your name'className='p-2 bg-transparent border-4 border-green-500 text-green-500 focus:outline-none' />
                      <input type="text" name='Email' placeholder='Enter your Email'className=' my-4 p-2 p-2 bg-transparent border-4 border-green-500 text-green-500 focus:outline-none' />
                      <textarea name="Message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-4 border-green-500 text-green-500 focus:outline-none'>
                      </textarea>
                      <button className='text-white text-2xl bg-transparent border-4 border-green-500  my-8 py-2 px-10 mx-auto flex items-center hover:scale-110 duration-200'>Send</button>
                    </form>
              </div>




    </div>
    </div>
  )
}

export default contact