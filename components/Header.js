import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import logo from "../public/logo.png";
import darkLogo from "../public/darkLogo.png";
import product1 from "../public/product1.jpg";
import product2 from "../public/product2.jpg";
import product3 from "../public/product3.jpg";
import product4 from "../public/product4.jpg";

const styles = {
  headerOuter: "flex justify-center w-full absolute top-0 left-0 z-[10]",
  headerContainer: "hidden md:flex justify-between py-[46px] max-w-[1200px] w-[1200px]",
  headerLeft: "",
  headerLogo: "w-[96px]",
  headerMiddle: "",
  navLinks: "text-[#FFFFFF78] px-[30px] hover:text-white transition-all duration-300",
  headerList: "flex",
  headerRight: "flex justify-between max-w-[75px] w-[75px]",
  svgBtn: "w-[21px] h-[21px] fill-white hover:fill-[#319E48] cursor-pointer",
  active: "text-white",
  cartOverlay: "fixed inset-0 bg-black bg-opacity-50 z-40",
  cart: "pt-[60px] p-[20px] fixed top-0 right-0 w-full md:w-[350px] h-full bg-white shadow-lg z-50 overflow-y-scroll transition-all duration-300 bg-[#FDF5F3]",
  cartHidden: "transform translate-x-full",
  cartVisible: "transform translate-x-0",
  closeButton: "absolute top-4 right-4 text-xl cursor-pointer text-[#319E48] text-[2rem]",
  menuLogo: "w-[7rem]",
  menuContainer: "mt-[50px]",
  menuHeading: "text-[#023A15] font-cormorant text-[30px] mb-[20px]",
  menuRow: "flex",
  menuRowImages: "w-[50%]",
  menuListItems: "flex items-center mb-[15px]",
  menuSvg: "fill-[#319E48] w-[15px] mr-[15px]",
  mobileContainer: "md:hidden flex justify-between w-full items-center pt-[20px] px-[20px]"

};

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const cartRef = useRef();
  const searchRef = useRef();

  // Handle click outside of the cart to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    function handleClickSearchOutside(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      }

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    if (isSearchOpen) {
        document.addEventListener("mousedown", handleClickSearchOutside);
      } else {
        document.removeEventListener("mousedown", handleClickSearchOutside);
      }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickSearchOutside);
    };
  }, [isCartOpen, isSearchOpen]);

  function isActive(path) {
    return router.pathname === path ? styles.active : "";
  }

  return (
    <>
      <div className={styles.headerOuter}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.headerLeft}>
            <Image src={logo} alt="Chloro Logo" className={styles.headerLogo} />
          </Link>
          <div className={styles.headerMiddle}>
            <ol className={styles.headerList}>
              <li>
                <Link href="/" className={`${styles.navLinks} ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`${styles.navLinks} ${isActive("/about")}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={`${styles.navLinks} ${isActive("/services")}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pages" className={`${styles.navLinks} ${isActive("/pages")}`}>
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${styles.navLinks} ${isActive("/contact")}`}>
                  Contact
                </Link>
              </li>
            </ol>
          </div>
          <div className={styles.headerRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.svgBtn} onClick={() => setIsSearchOpen(!isSearchOpen)}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={styles.svgBtn}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
        <div className={styles.mobileContainer}>
            <div>
                <Image src={logo} alt="Chloro Logo" className="w-[90px]"/>
            </div>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`${styles.svgBtn} mr-[20px]`} onClick={() => setIsSearchOpen(!isSearchOpen)}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={styles.svgBtn}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
            </div>
        </div>
      </div>

      {/* Cart Overlay */}
      {isCartOpen && <div className={styles.cartOverlay} />}
      {isSearchOpen && <div className={styles.cartOverlay} />}

      {/* Cart */}
      <div
        ref={cartRef}
        className={`${styles.cart} ${isCartOpen ? styles.cartVisible : styles.cartHidden}`}
      >
        <span className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
          &times;
        </span>
        <Image src={darkLogo} alt="Chloro Logo" className={styles.menuLogo}/>
        <div className={styles.menuContainer}>
            <h1 className={styles.menuHeading}>Gallery</h1>
            <div className={styles.menuRow}>
                <Image src={product1} alt="Product Photo" className={styles.menuRowImages}/>
                <Image src={product2} alt="Product Photo" className={styles.menuRowImages}/>
            </div>
            <div className={styles.menuRow}>
                <Image src={product3} alt="Product Photo" className={styles.menuRowImages}/>
                <Image src={product4} alt="Product Photo" className={styles.menuRowImages}/>
            </div>
        </div>
        <div className={styles.menuContainer}>
            <h1 className={styles.menuHeading}>Contact</h1>
            <ol className={styles.menuList}>
                <li className={styles.menuListItems}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.menuSvg}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                140 Hope Street, Plano
                </li>
                <li className={styles.menuListItems}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.menuSvg}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                +1 234 567 890
                </li>
                <li className={styles.menuListItems}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.menuSvg}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                anyemail@mail.com
                </li>
            </ol>
        </div>
      </div>
      <div ref={searchRef}
        className={`${styles.cart} ${isSearchOpen ? styles.cartVisible : styles.cartHidden}`}>
             <span className={styles.closeButton} onClick={() => setIsSearchOpen(false)}>
          &times;
        </span>
            <div className="flex items-center mt-[50px] rounded-full border-2 border-[#023A15] p-[8px]">
                <input type="text" name="search" id="search" placeholder="Search..." className="outline-none bg-none w-full"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[20px]"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
      </div>
    </>
  );
}

export default Header;
