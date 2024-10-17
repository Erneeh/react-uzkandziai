import { useState } from 'react'
import photo12 from '../assets/photo12.jpg'
import photo17 from '../assets/photo17.jpg'
import photo9 from '../assets/photo9.jpg'
import photo4 from '../assets/photo4.jpg'
import photo7 from '../assets/photo7.jpg'
import photo6 from '../assets/photo6.jpg'



const darbai = [
    { photo: photo12 },
    { photo: photo17 },
    { photo: photo9 },
    { photo: photo4 },
    { photo: photo7 },
    { photo: photo6 }
  ];


const PhotoDiv = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    const handleImageClick = (photo: string): void => {
      setSelectedImage(photo);
    };
  

  return (
    <>
    {darbai.map((items, index) => (
            <><img
            alt="Product photo"
            key={index}
            src={items.photo}
            className="relative flex flex-col items-center duration-700 group rounded-3xl hover:scale-105 cursor-pointer"
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

export default PhotoDiv