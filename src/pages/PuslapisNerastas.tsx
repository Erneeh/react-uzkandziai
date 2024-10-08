import React from 'react'
import { Link } from 'react-router-dom'

const PuslapisNerastas = () => {
  return (
    <div className="bg-gradient-to-b from-rose-100 to-rose-300 h-screen">
        <div className='flex flex-col  items-center justify-star pt-16'>
            <h1 className="text-5xl font-bold text-red-500">404</h1>
            <p className="text-2xl mt-4 py-8 font-semibold">Puslapis nerastas</p>
            <Link to="/"
            className='w-1/2 text-center items-center justify-center flex pt-8'>
                <button
                    className='w-1/2 flex justify-center items-center gap-2 text-gray-800 font-semibold hover:text-rose-100 border border-rose-100 text-xl px-6 py-3 bg-gradient-to-r from-rose-400 to-rose-500 hover:bg-gradient-to-l hover:from-rose-500 hover:to-rose-400 rounded-full shadow-md cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-rose-500'
                    type="button"
                    >Sugrįžti
                </button>
            </Link>
        </div>
    </div>
  )
}

export default PuslapisNerastas