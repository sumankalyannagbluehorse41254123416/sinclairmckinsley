// "use client";

// import { useState, useEffect, FC } from "react";
// import Image from "next/image";
// import "../public/style/slick-theme.css";
// import "../public/style/slick.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Slider: FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides: string[] = [
//     "https://www.sinclairmckinsley.co.uk/asset/img/banking_img11.jpg",
//     "https://www.sinclairmckinsley.co.uk/asset/img/banner_img2.png",
//     "https://www.sinclairmckinsley.co.uk/asset/img/slider3.jpg",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div id="slider_banner">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className="slide_banner"
//           style={{ display: index === currentSlide ? "block" : "none" }}>
//           <Image
//             src={slide}
//             alt={`Slide ${index + 1}`}
//             width={1200}
//             height={400}
//           />
//         </div>
//       ))}
//       <span className="controls" onClick={prevSlide} id="left-arrow">
//         <FaArrowLeft />
//       </span>
//       <span className="controls" onClick={nextSlide} id="right-arrow">
//         <FaArrowRight />
//       </span>
//     </div>
//   );
// };

// export default Slider;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export interface Slide {
  id: number;
  uuid: string;
  title: string;
  desktopImage: string;
}

export default function ClientSlider({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 8s
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return <div>No banners available</div>;
  }

  return (
    <div id="slider_banner">
      {slides.map((slide, index) => (
        <div
          key={slide.uuid || slide.id || index}
          className="slide_banner"
          style={{ display: index === currentSlide ? "block" : "none" }}>
          <Image
            src={slide.desktopImage}
            alt={slide.title || `Slide ${index + 1}`}
            width={1200}
            height={400}
            priority={index === currentSlide}
          />
        </div>
      ))}

      {/* Navigation controls */}
      <span className="controls" onClick={prevSlide} id="left-arrow">
        <FaArrowLeft />
      </span>
      <span className="controls" onClick={nextSlide} id="right-arrow">
        <FaArrowRight />
      </span>
    </div>
  );
}
