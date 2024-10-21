import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import blog1 from "../public/blog1.jpg";
import blog2 from "../public/blog2.jpg";
import blog3 from "../public/blog3.jpg";
import dashedLine from "../public/dashedLine.png";

const styles = {
    outerContainer: "flex justify-center bg-[#FDF5F3]",
    container: "max-w-[1200px] w-full px-[20px] md:px-[0px] py-[50px] md:py-[125px]",
    row: "flex flex-col md:flex-row justify-between",
    heading: "text-[#023A15] font-light text-[35px] md:text-[60px] font-cormorant text-center",
    strong: "text-[#023A15] font-light text-[35px] md:text-[60px] font-cormorant relative",
    dashedLine: "absolute bottom-0 left-0",
    headingContainer: "flex flex-col items-center mb-[80px]",
    para: "text-[#567C49] w-[80%] md:w-[680px] text-center mt-[50px] md:mt-[0px]"
}

function Blog() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>
                    Blog and &nbsp;
                    <strong className={styles.strong}>
                        News
                        <Image src={dashedLine} alt="dashedLine" className={styles.dashedLine}/>
                    </strong>
                </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>
            </div>
            <div className={styles.row}>
            <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-lg transition-transform duration-300 flex flex-col items-center"
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
    >
      {/* Gate-shaped image */}
      <div className={`relative w-full h-[335px] overflow-hidden rounded-t-full bg-gray-200`}>
        <Image
          src={blog1}
          alt="blog1"
          fill
          className={`object-cover transition-transform duration-300 ${isHovered1 ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Details Container */}
      <div className="bg-[#023A15] p-[20px] mb-[50px]">
        <h1 className="text-white font-cormorant text-[30px] font-light mb-[30px]">A photographer shows the beauty transition</h1>
        <Link href="/" className='text-white underline flex items-center'>
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-[16px] ml-[10px] fill-white'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </Link>
      </div>
    </div>
            <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-lg transition-transform duration-300 flex flex-col items-center"
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    >
      {/* Gate-shaped image */}
      <div className={`relative w-full h-[335px] overflow-hidden rounded-t-full bg-gray-200`}>
        <Image
          src={blog2}
          alt="blog2"
          fill
          className={`object-cover transition-transform duration-300 ${isHovered2 ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Details Container */}
      <div className="bg-[#023A15] p-[20px] mb-[50px]">
        <h1 className="text-white font-cormorant text-[30px] font-light mb-[30px]">A photographer shows the beauty transition</h1>
        <Link href="/" className='text-white underline flex items-center'>
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-[16px] ml-[10px] fill-white'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </Link>
      </div>
    </div>
            <div
      className="w-full max-w-sm mx-auto overflow-hidden rounded-lg transition-transform duration-300 flex flex-col items-center"
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)}
    >
      {/* Gate-shaped image */}
      <div className={`relative w-full h-[335px] overflow-hidden rounded-t-full bg-gray-200`}>
        <Image
          src={blog3}
          alt="blog3"
          fill
          className={`object-cover transition-transform duration-300 ${isHovered3 ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Details Container */}
      <div className="bg-[#023A15] p-[20px] mb-[50px]">
        <h1 className="text-white font-cormorant text-[30px] font-light mb-[30px]">A photographer shows the beauty transition</h1>
        <Link href="/" className='text-white underline flex items-center'>
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-[16px] ml-[10px] fill-white'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </Link>
      </div>
    </div>
            </div>
        </div>
    </div>
  )
}

export default Blog