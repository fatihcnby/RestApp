"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Her zaman lezzetlİ & Her zaman sıcak",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "Adresİnİze hızlı teslİmat",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "Aİlenİz ve sevdİklerİnİz İçİn",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-center text-5xl uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">
          Hemen Sipariş Ver
        </button>
      </div>

      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          className="object-cover"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
