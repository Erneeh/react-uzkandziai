import { Link } from 'react-router-dom'

const PuslapisNerastas = () => {
  return (
    <div className="bg-headerColor h-screen">
        <div className='flex flex-col  items-center justify-star pt-16'>
            <h1 className="text-5xl font-bold text-buttonColor">404</h1>
            <p className="text-2xl mt-4 py-8 font-semibold">Puslapis nerastas</p>
            <Link to="/"
            className='w-1/2 text-center items-center justify-center flex py-8 '>
                <button
                    className='w-1/2 flex justify-center items-center gap-2 font-semibold text-textColor hover:text-headerFooterText text-xl px-4 py-4 bg-buttonColor rounded-full shadow lg 
                 border border-footerColor cursor-pointer transform 
                 hover:scale-110 transition-transform duration-300 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-gray-400'
                    type="button"
                    >Sugrįžti
                </button>
            </Link>
        </div>
    </div>
  )
}

export default PuslapisNerastas