import React from 'react'
import Foto1 from '../assets/foto1.jpeg'
import PhotoDiv from './PhotoDiv'
const Photos = () => {
  return (
    <div className="overflow-hidden bg-headerColor py-10 sm:py-16">
      <div className=" mx-auto justify-center items-center flex flex-col  text-headerFooterText w-screen text-center font-poppins'">
        <div className='py-10 px-32 max-w-6xl '>
            <h1 className='text-3xl italic sm:text-5xl'>Galerija</h1>
        </div>
        <div className="mx-auto grid w-screen px-6 md:px-16 grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 pt-6">
          <PhotoDiv></PhotoDiv>
        </div>
    </div>
  </div>
  )
}

export default Photos