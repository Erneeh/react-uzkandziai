import React from 'react'
import Foto1 from '../assets/foto1.jpeg'
const Photos = () => {
  return (
    <div className="overflow-hidden bg-headerColor py-10 sm:py-16 w-screen">
      <div className="px-32 mx-auto justify-center items-center flex flex-col  text-headerFooterText w-screen text-center font-poppins'">
        <div className='py-10 max-w-6xl '>
            <h1 className='text-3xl italic sm:text-5xl'>Lorem, ipsum.</h1>
        </div>
        <div className="mx-auto grid w-3/4 px-6 grid-cols-2 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-6">
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
          <div className='shadow-xl rounded-xl hover:scale-105 transform duration-300'>
            <div className=''>
              <img
            alt="Product screenshot"
            src={Foto1}
            className="rounded-t-xl"
            />
            </div>
            <div className='bg-textColor rounded-b-xl justify-start text-start items-start mx-auto flex flex-col px-4 py-4 gap-4'>
              <p className='font-semibold text-xl sm:text-2xl'>Lorem, ipsum.</p>
              <p className='text-lg sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum recusandae quisquam impedit, perferendis nesciunt blanditiis labore expedita earum reiciendis laudantium.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Photos