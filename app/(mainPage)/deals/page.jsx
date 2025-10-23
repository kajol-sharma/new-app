"use client";
import Image from "next/image";
import { useState } from "react";

const banners = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹1,49,999",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-family-hero",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,999",
    img: "https://m.media-amazon.com/images/I/61+btxzpfDL._SL1500_.jpg",
  },
  {
    id: 3,
    name: "Samsung 55” 4K Smart TV",
    price: "₹67,999",
    img: "https://images.pexels.com/photos/28850990/pexels-photo-28850990.jpeg",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % banners.length);
  const prevSlide = () =>
    setCurrent((current - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="flex transition-transform duration-700"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {banners.map((item) => (
          <div key={item.id} className="min-w-full relative">
            <img
              src={item.img}
              alt="not found"
              width={1200}
              height={600}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-lg">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow-md"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full shadow-md"
      >
        ▶
      </button>
    </div>
  );
}
