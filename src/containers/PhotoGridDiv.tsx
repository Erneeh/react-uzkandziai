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
    { photo: photo1, alt: 'Užkandžių padėklas šventei' },
    { photo: photo2, alt: 'Užkandžių padėklas su ikrų krepšeliais ir kumpio rožytėmis' },
    { photo: photo3, alt: 'Mėsos užkandžių padėklas su dekoracijomis' },
    { photo: photo4, alt: 'Šventinis užkandžių padėklas' },
    { photo: photo5, alt: 'Užkandžių asorti su mini burgeriais ir krepšeliais' },
    { photo: photo6, alt: 'Užkandžių padėklas pobūviui' },
    { photo: photo7, alt: 'Didelis užkandžių padėklas su mini burgeriais' },
    { photo: photo8, alt: 'Užkandžių padėklas šventiniam stalui' },
    { photo: photo9, alt: 'Mini burgeris ant lėkštės' },
    { photo: photo10, alt: 'Užkandžių padėklas svečiams' },
    { photo: photo11, alt: 'Šventinis užkandžių padėklas su vėrinukais' },
    { photo: photo12, alt: 'Užkandžių padėklas šventei' },
    { photo: photo13, alt: 'Šventinių kepinių padėklas' },
    { photo: photo14, alt: 'Bandelių ir užkandžių padėklas' },
    { photo: photo15, alt: 'Užkandžių padėklas šventei' },
    { photo: photo16, alt: 'Šventinis užkandžių padėklas' },
    { photo: photo17, alt: 'Krepšelis su lašiša ir avokado kremu' },
    { photo: photo18, alt: 'Skaičiaus formos užkandžių tortas gimtadieniui' },
    { photo: photo19, alt: 'Dekoruotas duonos tortas' },
  ];


const PhotoGridDiv = ({ limit }: { limit: number}) => {

  const [selectedImage, setSelectedImage] = useState<{ photo: string; alt: string } | null>(null);

  return (
    <>
    {darbai.slice(0, limit).map((items) => (
        <img
        alt={items.alt}
        key={items.photo}
        src={items.photo}
        loading="lazy"
        className="relative flex flex-col items-center duration-700 group rounded-3xl hover:scale-105 cursor-pointer col-span-2"
        onClick={() => setSelectedImage(items)} />
    ))}
    {selectedImage && (
        <div
            className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-20 cursor-pointer"
            onClick={() => setSelectedImage(null)}
        ><img
                src={selectedImage.photo}
                alt={selectedImage.alt}
                className="w-auto lg:h-2/3" />
        </div>
    )}
    </>
  )

}

export default PhotoGridDiv
