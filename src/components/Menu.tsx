"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Anasayfa", url: "/" },
  { id: 2, title: "Menü", url: "/menu" },
  { id: 3, title: "Çalışma Saatlerİ", url: "/" },
  { id: 4, title: "İletİşİm", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 flex flex-col gap-8 items-center justify-center text-3xl z-10 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)]">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Gİrİş
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Sİparİşler
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
