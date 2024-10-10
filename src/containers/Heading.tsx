import React from 'react'
import Foto1 from '../assets/foto1.jpeg'

const Heading = () => {
  return (
    <>
    <div className="overflow-hidden bg-headerColor py-10 sm:py-16 w-screen">
      <div className="mx-auto">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-12 lg:pt-4 items-center justify-center flex">
            <div className="lg:max-w-lg m-5">
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">Ir <span className='text-buttonColor'>gražu</span> ir <span className='text-buttonColor'>skanu</span>...</p>
              <p className="mt-6 text-2xl  sm:text-3xl leading-8 text-headerFooterText font-medium text-center">
                Gardžios užkandžių idėjos, kurias galėsite pritaikyti savo gimtadieniui, susitikimams ir kitoms šventėms. <span className='italic underline'><br></br>Kiekvienas kąsnelis – su meile pagamintas ir kruopščiai atrinktas</span>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={Foto1}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0 brightness-50 m-5"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Heading