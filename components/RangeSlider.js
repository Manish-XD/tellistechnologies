import { useState, useRef, useEffect } from "react";

const styles = {
  sliderContainer: "w-full flex flex-col items-center mt-10",
  rangeContainer: "relative w-full max-w-[600px] h-1 bg-gray-300 rounded-md",
  rangeTrack: "absolute h-1 bg-[#023A15] rounded-md transition-all duration-300 ease-out",
  thumb: "absolute top-[-10px] w-6 h-6 bg-[#023A15] rounded-full cursor-pointer shadow-md transition-transform duration-300 ease-out",
  valueDisplay: "w-full mt-6 text-lg text-[#567C49]"
};

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [minPointer, setMinPointer] = useState(0); // Slider starts from 0%
  const [maxPointer, setMaxPointer] = useState(100); // Slider ends at 100%

  const sliderRef = useRef(null);

  // Calculate value when the pointer is moved
  const calculateValue = (position, width) => {
    return Math.round((position / width) * 100);
  };

  // Function to move the min handle smoothly
  const handleMouseMoveMin = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const position = Math.max(0, Math.min(e.clientX - rect.left, rect.width)); // Ensure handle stays in bounds
    const percentage = calculateValue(position, rect.width);
    setMinPointer(Math.min(percentage, maxPointer - 10)); // Prevent overlap
    setMinValue(Math.round((percentage / 100) * 100));
  };

  // Function to move the max handle smoothly
  const handleMouseMoveMax = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const position = Math.max(0, Math.min(e.clientX - rect.left, rect.width)); // Ensure handle stays in bounds
    const percentage = calculateValue(position, rect.width);
    setMaxPointer(Math.max(percentage, minPointer + 10)); // Prevent overlap
    setMaxValue(Math.round((percentage / 100) * 100));
  };

  // Add mouse event listeners when dragging starts
  const handleMouseDownMin = () => {
    document.addEventListener("mousemove", handleMouseMoveMin);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownMax = () => {
    document.addEventListener("mousemove", handleMouseMoveMax);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Remove mouse event listeners when dragging ends
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMoveMin);
    document.removeEventListener("mousemove", handleMouseMoveMax);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Range slider */}
      <div className={styles.rangeContainer} ref={sliderRef}>
        {/* Range Track */}
        <div
          className={styles.rangeTrack}
          style={{
            left: `${minPointer}%`,
            right: `${100 - maxPointer}%`
          }}
        />
        {/* Min pointer */}
        <div
          className={styles.thumb}
          style={{ left: `${minPointer}%` }}
          onMouseDown={handleMouseDownMin}
        />
        {/* Max pointer */}
        <div
          className={styles.thumb}
          style={{ left: `${maxPointer}%` }}
          onMouseDown={handleMouseDownMax}
        />
      </div>

      {/* Display range values */}
      <div className={styles.valueDisplay}>
        <div className="flex justify-start">
        <p className="w-full text-left">Range: ${minValue} - ${maxValue}</p>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
