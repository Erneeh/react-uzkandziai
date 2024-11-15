import { Link } from 'react-router-dom'
import PhotoGridDiv from './PhotoGridDiv'
const Photos = () => {
  return (
    <div className="overflow-hidden bg-headerColor  py-10 sm:py-16">
      <div className=" mx-auto justify-center items-center flex flex-col  text-headerFooterText w-screen text-center font-poppins'">
        <div className='py-10 px-32 max-w-6xl '>
            <h1 className='text-3xl italic sm:text-5xl '><Link to="/galerija" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>Galerija</Link></h1>
        </div>
        <div className="mx-auto grid w-screen px-6 md:px-16 grid-cols-4 gap-x-4 gap-y-4 md:gap-y-8 md:gap-x-8 sm:gap-y-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-6 pt-6">
          <PhotoGridDiv limit={6}/>
        </div>
    </div>
  </div>
  )
}

export default Photos