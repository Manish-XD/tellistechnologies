// components/GateShapeImage.js
import Image from 'next/image';

const GateShapeImage = ({ src, alt, height, marginRight = "auto" }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-t-full bg-gray-200`} style={{marginRight: marginRight, height: `${height}px`}}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default GateShapeImage;
