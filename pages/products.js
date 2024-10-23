import Header from '@/components/Header';
import Image from 'next/image';

import spiral from "../public/spiral.png";
import GateShapeImage from '@/components/GateShapeImage';
import company1 from "../public/company1.png";
import company2 from "../public/company2.png";
import company3 from "../public/company3.png";
import company4 from "../public/company4.png";
import product1 from "../public/product1.jpg";
import product2 from "../public/product2.jpg";
import product3 from "../public/product3.jpg";
import product4 from "../public/product4.jpg";
import RangeSlider from '@/components/RangeSlider';

const styles = {
  outerContainer: 'flex justify-center w-full bg-[#FDF5F3]',
  container: 'w-full flex-col md:flex-row max-w-[1200px] flex px-[20px] md:px-[0px]',
  left: 'w-full md:w-[30%]',
  right: 'w-full md:w-[70%] px-[30px] mt-[30px]',
  heading: 'font-cormorant font-light text-[30px] text-[#023A15] mt-[60px]',
  categoryDiv: 'flex justify-between my-[5px] text-[#567C49]',
  quantityDiv: 'bg-[#023A15] text-white rounded-full px-[8px]',
  brandsDiv: 'flex',
  brandsImg: 'w-[50%] invert cursor-pointer',
  filterDiv: 'flex justify-between items-center text-[#567C49] mb-[30px]',
  btn: 'bg-[#023A15] rounded-full py-[12px] px-[28px] flex text-white items-center transition-all duration-300',
  btnSvg: 'fill-white w-[10px] ml-[30px]',
  row: 'flex flex-col md:flex-row justify-between mb-[30px]',
  pagesDiv: 'flex items-center justify-center text-[30px]',
  pagesDivSvg: 'w-[20px] mx-[20px]'
}

function products() {
  return (
    <div>
      <Header />
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
        <h1 className="relative text-white text-[30px] md:text-[60px] font-cormorant z-10">
          Our
          &nbsp;
          <strong className='relative font-light font-cormorant'>
            Product
            <Image src={spiral} alt="spiral vector design" className='absolute top-[10px] left-[0px]' />
          </strong>
        </h1>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Categories</h1>
            <hr />
            <div className={styles.categoryDiv}>
              <p>Body</p>
              <div className={styles.quantityDiv}>
                <span>5</span>
              </div>
            </div>
            <div className={styles.categoryDiv}>
              <p>Brushes</p>
              <div className={styles.quantityDiv}>
                <span>5</span>
              </div>
            </div>
            <div className={styles.categoryDiv}>
              <p>Hair</p>
              <div className={styles.quantityDiv}>
                <span>5</span>
              </div>
            </div>
            <div className={styles.categoryDiv}>
              <p>Skincare</p>
              <div className={styles.quantityDiv}>
                <span>5</span>
              </div>
            </div>
            <div className={styles.categoryDiv}>
              <p>Makeup</p>
              <div className={styles.quantityDiv}>
                <span>5</span>
              </div>
            </div>
            <h1 className={styles.heading}>Price</h1>
            <hr />
            <RangeSlider />
            <h1 className={styles.heading}>Brands</h1>
            <hr />
            <div className={styles.brandsDiv}>
              <Image src={company1} alt="company 1" className={styles.brandsImg} />
              <Image src={company2} alt="company 2" className={styles.brandsImg} />
            </div>
            <div className={styles.brandsDiv}>
              <Image src={company3} alt="company 3" className={styles.brandsImg} />
              <Image src={company4} alt="company 4" className={styles.brandsImg} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.filterDiv}>
              <p>Showing 1-12 of 100 item(s)</p>
              <button className={styles.btn}>
                DEFAULT SORTING
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className={styles.btnSvg}
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </button>
            </div>
            <div className={styles.row}>
              <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product1} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Face Eye Mask</strong>
                <span className='text-[#319E48] text-[12px]'>$14.00 - $20.00</span>
              </div>
              <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product2} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Super Beauty Serum</strong>
                <span className='text-[#319E48] text-[12px]'>$20.00</span>
              </div>
              <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product3} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Coconut Essen Oil</strong>
                <span className='text-[#319E48] text-[12px]'>$10.00 - $15.00</span>
              </div>
            </div>
            <div className={styles.row}>
            <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product4} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Face Eye Mask</strong>
                <span className='text-[#319E48] text-[12px]'>$14.00 - $20.00</span>
              </div>
              <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product3} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Super Beauty Serum</strong>
                <span className='text-[#319E48] text-[12px]'>$20.00</span>
              </div>
              <div className='flex flex-col items-center w-full md:w-[30%]'>
                <GateShapeImage src={product1} height={300} marginRight={30} />
                <strong className='text-[#023A15] mt-[15px]'>Coconut Essen Oil</strong>
                <span className='text-[#319E48] text-[12px]'>$10.00 - $15.00</span>
              </div>
            </div>
            <div className={styles.pagesDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.pagesDivSvg}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <p>1 2 3 .... 10</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.pagesDivSvg}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default products