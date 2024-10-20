import { useState } from 'react'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import photo8 from '../assets/photo8.jpg'
import photo9 from '../assets/photo9.jpg'
import photo10 from '../assets/photo10.jpg'
import photo11 from '../assets/photo11.jpg'
import photo12 from '../assets/photo12.jpg'
import photo13 from '../assets/photo13.jpg'
import photo14 from '../assets/photo14.jpg'
import photo15 from '../assets/photo15.jpg'
import photo16 from '../assets/photo16.jpg'
import photo17 from '../assets/photo17.jpg'
import photo18 from '../assets/photo18.jpeg'
import photo19 from '../assets/photo19.jpeg'



export const darbai = [
    { photo: photo1 },
    { photo: photo2 },
    { photo: photo3 },
    { photo: photo4 },
    { photo: photo5 },
    { photo: photo6 },
    { photo: photo7 },
    { photo: photo8 },
    { photo: photo9 },
    { photo: photo10 },
    { photo: photo11 },
    { photo: photo12 },
    { photo: photo13 },
    { photo: photo14 },
    { photo: photo15 },
    { photo: photo16 },
    { photo: photo17 },
    { photo: photo18 },
    { photo: photo19 },
  ];


const PhotoGridDiv = ({ limit }: { limit: number}) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    const handleImageClick = (photo: string): void => {
      setSelectedImage(photo);
    };
  

  return (
    <>
    {darbai.slice(0, limit).map((items, index) => (
            <><img
            alt="Product photo"
            key={index}
            src={items.photo}
            className={`relative flex flex-col items-center duration-700 group rounded-3xl hover:scale-105 cursor-pointer col-span-2`}
            onClick={() => handleImageClick(items.photo)} />
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-20 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    ><img
                            src={selectedImage}
                            alt="Enlarged"
                            className="w-auto lg:h-2/3" />
                    </div>
                )}
        </>
    ))}
    </>
  )
  
}

export default PhotoGridDiv