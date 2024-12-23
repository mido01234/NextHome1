'use client';

import Image from 'next/image';
import kentaky from "./images/kentaky.png"
import Macdonalds from "./images/Macdonalds.png"
import BuffaloBurger from "./images/BuffaloBurger.png"
import Starbucks from "./images/Starbucks.png"
const partners = [
  { name: 'KFC', logo: kentaky, rating: 5 },
  { name: 'Buffalo Burger', logo: BuffaloBurger, rating: 5 },
  { name: 'MACDONALD', logo: Macdonalds, rating: 5 },
  { name: 'STARBUCKS', logo: Starbucks, rating: 5 },
];

export default function PartnersSlider() {
  return (
    <div className="w-full  mx-auto mt-10">
      <h2 className="text-center text-8xl Jomhuria-regular text-purple-600 mb-6">
        Our Partners
      </h2>
      {/* Slider */}
      <div className="flex justify-around overflow-x-scroll scrollbar-hide scroll-snap-x snap-mandatory gap-4 px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center w-64 flex flex-col items-center text-center rounded-lg bg-white "
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              // width={80}
              // height={80}
              className="mb-4 "
              style={{width:"180%" , height:"100%"}}
            />
            <h3 className="text-3xl cairo-bold text-gray-700">
              {partner.name}
            </h3>
            <p className="text-yellow-500 text-3xl" >{'★'.repeat(partner.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}