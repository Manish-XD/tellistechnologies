import Header from '@/components/Header';
import Image from 'next/image';

import spiral from "../public/spiral.png";
import GetInTouch from '@/components/GetInTouch';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

const contact = () => {
  return (
    <div>
        <Header/>
        <div className="relative w-full h-[50vh] bg-[#023A15] flex items-center justify-center">
            <div className="absolute inset-0">
                <Image
                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-using-pipette-with-cosmetics-for-face-skin-c-LQQPV2Y.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                />
            </div>
            <h1 className="relative text-white text-[60px] font-cormorant z-10">
                <strong className='relative font-light font-cormorant'>
                    Contact
                    <Image src={spiral} alt="spiral vector design" className='absolute top-[10px] left-[0px]'/>
                </strong>
                &nbsp;
                Us
            </h1>
        </div>
        <GetInTouch/>
        <Subscribe/>
        <Footer/>
    </div>
  );
};

export default contact;
