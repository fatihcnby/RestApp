import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 lx:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        FAST FOOD KARNAVALI
      </Link>
      <p>© Tüm Hakları Saklıdır</p>
    </div>
  );
};

export default Footer;
