import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Lezzetli Hamburgerler ve Çıtır Patatesler
        </h1>
        <p className="text-white xl:text-xl">
          Siparişiniz özel paketleri ile hızlı şekilde adresinize ulaşsın...
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6 m-3">
          Sipariş Ver
        </button>
      </div>
      <div className="flex-1 w-full md:h-full relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
