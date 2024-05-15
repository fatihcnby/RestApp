import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40  text-red-500 p-4 flex justify-between">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Anasayfa</Link>
        <Link href="/menu">Menü</Link>
        <Link href="/">İletİşİm</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">FAST FOOD Karnavalı</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center flex-1">
        <div className="md:absolute top-3 r-2 lg:static justify-end flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>0312123456 </span>
        </div>
        {!user ? (
          <Link href="/login">Gİrİş</Link>
        ) : (
          <Link href="/order">Sİparİşler</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
