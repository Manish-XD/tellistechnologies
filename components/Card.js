// components/Card.js
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Card = ({ src, alt, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-lg transition-transform duration-300 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gate-shaped image */}
      <div className={`relative w-full h-[475px] overflow-hidden rounded-t-full bg-gray-200`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Details Container */}
      <div className="bg-white p-[20px] shadow-lg rounded-[10px] w-[90%] md:w-[80%] translate-y-[-2.5rem] flex flex-col items-center">
        <h1 className="font-cormorant text-[35px] font-light text-center">{title}</h1>
        <p className="text-[#567C49] mt-[15px] mb-[30px] text-center">{description}</p>
        <Link href="/" className='text-[#319E48] underline flex items-center'>
            LEARN MORE
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-[16px] ml-[10px] fill-[#319E48]'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
