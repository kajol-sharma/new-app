'use client'

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/bhai-dooj.webp",
  "/dhanteras.webp",
  "/govardhan.webp"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000; // 3 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, delay);
    return () => resetTimeout();
  }, [current]);

  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) resetTimeout();
  }, [isPaused]);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[400px] md:h-[500px]">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              idx === current ? "z-20" : "z-10"
            }`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) setCurrent((prev) => (prev + 1) % images.length);
              else if (offset.x > 50) setCurrent((prev) => (prev - 1 + images.length) % images.length);
            }}
            initial={false}
            animate={{ opacity: idx === current ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
