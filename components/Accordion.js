import { useState } from "react";

const styles = {
    accordionContainer: "w-full overflow-hidden",
    accordionHeader: (isOpen) => `mb-4 flex border-2 border-[#023A151F] rounded-full justify-between items-center cursor-pointer p-4 transition-colors duration-300 ${isOpen ? 'bg-[#023A15] text-white' : 'text-[#023A15]'}`,
    accordionTitle: (isOpen) => `font-cormorant text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#023A15]'}`,
    accordionIcon: (isOpen) => `transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`,
    accordionContent: "overflow-hidden transition-max-height duration-300 ease-in-out px-4 text-[#567C49]",
    hiddenContent: "max-h-0",
    shownContent: "max-h-[100%]" // Adjust as needed based on content length
};

const ArrowIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className={styles.accordionIcon(isOpen)}
        width="20"
        height="20"
        fill={isOpen ? 'white' : '#023A15'}
    >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
    </svg>
);

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionContainer}>
            <div className={styles.accordionHeader(isOpen)} onClick={() => setIsOpen(!isOpen)}>
                <h3 className={styles.accordionTitle(isOpen)}>{title}</h3>
                <ArrowIcon isOpen={isOpen} />
            </div>
            <div className={`${styles.accordionContent} ${isOpen ? styles.shownContent : styles.hiddenContent}`}>
                {content}
            </div>
        </div>
    );
}

export default Accordion;
