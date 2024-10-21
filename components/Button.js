import { useState } from "react";

const styles = {
    ctnBg: "bg-white text-black hover:text-white border-white",
    ctaBg: "bg-primaryGreen text-white hover:text-black border-black",
    btn: "px-[20px] py-[10px] md:px-[30px] md:py-[18px] rounded-full font-bold flex items-center border-2  transition-all duration-300 hover:bg-transparent",
    btnSvg: "w-[20px] ml-[20px]",
    svgLight: "fill-white",
    svgDark: "fill-black"
}

function Button({ctn, cta, title}) {
    const [visibility, setVisibility] = useState(false);
    function getCategory()
    {
        if(ctn)
        {
            return styles.ctnBg;
        }
        else if(cta)
        {
            return styles.ctaBg;
        }
    }
    return(
        <button className={`${styles.btn} ${getCategory()}`} onMouseEnter={()=>setVisibility(!visibility)} onMouseLeave={()=>setVisibility(!visibility)}>
            {title}
            {ctn && !visibility && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.btnSvg} ${styles.svgDark}`}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>}
            {ctn && visibility && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.btnSvg} ${styles.svgLight}`}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>}
            {cta && visibility && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.btnSvg} ${styles.svgDark}`}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>}
            {cta && !visibility && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.btnSvg} ${styles.svgLight}`}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>}
        </button>
    )
}

export default Button;